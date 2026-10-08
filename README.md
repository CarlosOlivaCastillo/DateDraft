# DateDraft

Asistente gastronómico interactivo paso a paso para parejas, diseñado para seleccionar el restaurante ideal para una cita en función del desplazamiento, nivel de etiqueta y apetito.

## Características

- **Diseño limpio y tipográfico**: Paleta en tonos rosa suave para fondos y tarjetas (`#FFF5F7`, `#FFEBF0`, `#FFFFFF`), con acentos y botones en rojo intenso (`#E63946`, `#D90429`).
- **Política estricta sin emojis**: Diseño 100% tipográfico con iconografía vectorial limpia (Lucide SVG).
- **Transiciones y animaciones fluidas**: Desarrollado con React 19, Vite, Tailwind CSS y Framer Motion.
- **Árbol de Decisión**:
  1. **Pregunta 1: "¿Te apetece conducir?"** (Sí / No)
     - *No*: Bloquea internamente el radio de búsqueda exclusivamente a **Villanueva de la Cañada**.
     - *Sí*: Despliega la sub-pregunta fluida **"¿Un ratito o un poco más?"** (*Un ratito* = Villanueva y alrededores; *Un poco más* = Madrid Centro).
  2. **Pregunta 2: "¿Cuánto te apetece arreglarte?"** (Slider continuo del 1 al 10 con clasificación dinámica: Casual, Smart Casual, Gala).
  3. **Pregunta 3: "¿Qué tipo de comida te apetece?"** (Italiano, Carne, Burguer, Pollo, Kebab, Sushi, Aleatorio).
- **Pantalla de Transición / Gemini AI**: Sincronización en tiempo real con la API de Google Gemini (o fallback optimizado) para generar consejos de vestuario, resumen de afinidad y recomendaciones románticas.
- **Pantalla de Resultados**:
  - **Carrusel de fotos táctil** (3-4 fotos en alta resolución por restaurante).
  - **Cuerpo**: Nombre destacado, valoración numérica con estrellas, distancia en km/minutos y tipo de cocina.
  - **Precio medio total para 2 personas**: Formateado en texto pequeño y color gris `#808080`.
  - **Reseñas verificadas**: Lista limpia de 3-4 reseñas con autor, puntuación y fecha.
  - **Botón de acción**: Botón rojo de ancho completo con enlace directo a Google Maps.
  - **Inyección REST**: Estructura modular preparada para consumir cualquier API REST externa o simular datos.

---

## Instalación y ejecución local

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno (crear .env a partir de .env.example)
# VITE_GEMINI_API_KEY=tu_api_key

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Construir para producción
npm run build
```

---

## Despliegue en Vercel

Este proyecto incluye `vercel.json` y está listo para desplegar en un solo clic:

```bash
# Con Vercel CLI
npx vercel

# O subiendo este repositorio a GitHub e importándolo directamente en https://vercel.com
```
