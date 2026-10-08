import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Custom Vite plugin to handle /api/places in local development
function localPlacesPlugin() {
  return {
    name: 'local-places-api',
    configureServer(server: any) {
      server.middlewares.use('/api/places', async (req: any, res: any) => {
        const urlObj = new URL(req.url, `http://${req.headers.host}`);
        const query = urlObj.searchParams.get('query') || urlObj.searchParams.get('name') || '';

        if (!query) {
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Missing query' }));
          return;
        }

        const searchQuery = query + ' restaurante interior terraza';

        try {
          const tokenUrl = 'https://duckduckgo.com/?q=' + encodeURIComponent(searchQuery);
          const tokenRes = await fetch(tokenUrl, {
            headers: {
              'User-Agent':
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            },
          });

          const html = await tokenRes.text();
          const vqdMatch = html.match(/vqd="([^"]+)"/) || html.match(/vqd=([0-9-]+)/);

          if (!vqdMatch) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, images: [] }));
            return;
          }

          const vqd = vqdMatch[1];
          const imgApiUrl = `https://duckduckgo.com/i.js?l=es-es&o=json&q=${encodeURIComponent(
            searchQuery
          )}&vqd=${vqd}&f=,,,`;

          const imgRes = await fetch(imgApiUrl, {
            headers: {
              'User-Agent':
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
              Referer: 'https://duckduckgo.com/',
            },
          });

          if (!imgRes.ok) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, images: [] }));
            return;
          }

          const imgData: any = await imgRes.json();
          const results = imgData?.results || [];
          const livePhotos = results
            .slice(0, 8)
            .map((r: any) => r.image)
            .filter((url: string) => typeof url === 'string' && url.startsWith('http'));

          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: true, name: query, images: livePhotos }));
        } catch (error: any) {
          console.error('Local places API error:', error);
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: false, error: error.message }));
        }
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    localPlacesPlugin(),
  ],
})
