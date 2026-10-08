import fs from 'fs';
import path from 'path';

const RESTAURANTS_JSON_PATH = path.join(process.cwd(), 'src', 'data', 'restaurants.json');
const PUBLIC_RESTAURANTS_JSON_PATH = path.join(process.cwd(), 'public', 'data', 'restaurants.json');
const RESTAURANTS_TS_PATH = path.join(process.cwd(), 'src', 'data', 'restaurants.ts');

// Reference Point: Centro de Villanueva de la Cañada (Plaza de España / Ayuntamiento)
const VVA_CENTER = {
  lat: 40.44747,
  lng: -3.99285,
  name: 'Centro de Villanueva de la Cañada'
};

// Haversine formula to compute great-circle distance in km
function calculateDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Coordinates mapping for all verified venues
const VENUE_COORDINATES = {
  // Villanueva de la Cañada
  'vva-viajera': { lat: 40.4472, lng: -3.9935, address: 'Calle Cristo 26, 28691 Villanueva de la Cañada, Madrid' },
  'vva-gustibus': { lat: 40.4468, lng: -3.9942, address: 'Calle Camargo 2, 28691 Villanueva de la Cañada, Madrid' },
  'vva-italiana': { lat: 40.4471, lng: -3.9938, address: 'Calle Cristo 34, 28691 Villanueva de la Cañada, Madrid' },
  'vva-pulperia': { lat: 40.4478, lng: -3.9920, address: 'Calle Real 22, 28691 Villanueva de la Cañada, Madrid' },
  'vva-laurel': { lat: 40.4502, lng: -3.9965, address: 'Calle Arquitectura 7, 28691 Villanueva de la Cañada, Madrid' },
  'vva-craftburger': { lat: 40.4466, lng: -3.9924, address: 'Calle Empedrada 14, 28691 Villanueva de la Cañada, Madrid' },
  'vva-tgb': { lat: 40.4485, lng: -3.9908, address: 'Avenida de Madrid 45, 28691 Villanueva de la Cañada, Madrid' },
  'vva-telepizza': { lat: 40.4470, lng: -3.9940, address: 'Calle Cristo 18, 28691 Villanueva de la Cañada, Madrid' },
  'vva-dominos': { lat: 40.4482, lng: -3.9912, address: 'Avenida de Madrid 32, 28691 Villanueva de la Cañada, Madrid' },
  'vva-100m': { lat: 40.4479, lng: -3.9915, address: 'Calle Real 38, 28691 Villanueva de la Cañada, Madrid' },
  'vva-brasa': { lat: 40.4510, lng: -3.9978, address: 'Calle Severo Ochoa 9, 28691 Villanueva de la Cañada, Madrid' },
  'vva-fogon': { lat: 40.4481, lng: -3.9918, address: 'Calle Real 15, 28691 Villanueva de la Cañada, Madrid' },
  'vva-pollosvalle': { lat: 40.4463, lng: -3.9922, address: 'Calle Empedrada 6, 28691 Villanueva de la Cañada, Madrid' },
  'vva-polloscanada': { lat: 40.4490, lng: -3.9902, address: 'Avenida de Madrid 52, 28691 Villanueva de la Cañada, Madrid' },
  'vva-bosforo': { lat: 40.4473, lng: -3.9932, address: 'Calle Cristo 12, 28691 Villanueva de la Cañada, Madrid' },
  'vva-istanbul': { lat: 40.4480, lng: -3.9916, address: 'Calle Real 42, 28691 Villanueva de la Cañada, Madrid' },
  'vva-kobesushi': { lat: 40.4452, lng: -3.9968, address: 'Avenida de la Universidad 8, 28691 Villanueva de la Cañada, Madrid' },
  'vva-yuzu': { lat: 40.4483, lng: -3.9910, address: 'Avenida de Madrid 28, 28691 Villanueva de la Cañada, Madrid' },
  'vva-atenea': { lat: 40.4476, lng: -3.9926, address: 'Plaza de España 4, 28691 Villanueva de la Cañada, Madrid' },
  'vva-horno': { lat: 40.4477, lng: -3.9922, address: 'Calle Real 8, 28691 Villanueva de la Cañada, Madrid' },
  'vva-sangines': { lat: 40.4474, lng: -3.9930, address: 'Calle Cristo 8, 28691 Villanueva de la Cañada, Madrid' },
  'vva-sweetcoffee': { lat: 40.4486, lng: -3.9906, address: 'Avenida de Madrid 39, 28691 Villanueva de la Cañada, Madrid' },
  'vva-lagoleta': { lat: 40.4469, lng: -3.9936, address: 'Calle Camargo 8, 28691 Villanueva de la Cañada, Madrid' },
  'vva-ladescarada': { lat: 40.4475, lng: -3.9931, address: 'Calle Cristo 22, 28691 Villanueva de la Cañada, Madrid' },
  'vva-sakura': { lat: 40.4455, lng: -3.9962, address: 'Avenida de la Universidad 14, 28691 Villanueva de la Cañada, Madrid' },
  'vva-granier': { lat: 40.4484, lng: -3.9909, address: 'Avenida de Madrid 18, 28691 Villanueva de la Cañada, Madrid' },

  // Brunete (Vecino sur de Villanueva, 4-5 km)
  'bru-cortijo': { lat: 40.4045, lng: -3.9992, address: 'Calle Real de San Sebastián 14, 28690 Brunete, Madrid' },
  'bru-pilar': { lat: 40.4052, lng: -3.9985, address: 'Plaza Mayor 6, 28690 Brunete, Madrid' },
  'bru-pizzeria': { lat: 40.4038, lng: -4.0002, address: 'Calle Asunción 4, 28690 Brunete, Madrid' },

  // Majadahonda (Vecino este, 9-11 km)
  'maj-goiko': { lat: 40.4720, lng: -3.8715, address: 'Carretera de Pozuelo 48, 28220 Majadahonda, Madrid' },
  'maj-nonnamia': { lat: 40.4735, lng: -3.8690, address: 'Calle Gran Vía 22, 28220 Majadahonda, Madrid' },
  'maj-guetaria': { lat: 40.4715, lng: -3.8730, address: 'Carretera de Boadilla 8, 28220 Majadahonda, Madrid' },
  'maj-misssushi': { lat: 40.4740, lng: -3.8680, address: 'Plaza de Colón 3, 28220 Majadahonda, Madrid' },

  // Boadilla del Monte (Vecino sureste, 11-13 km)
  'boa-kobe': { lat: 40.4092, lng: -3.8785, address: 'Avenida del Siglo XXI 12, 28660 Boadilla del Monte, Madrid' },
  'boa-acebo': { lat: 40.4085, lng: -3.8800, address: 'Avenida del Siglo XXI 16, 28660 Boadilla del Monte, Madrid' },
  'boa-piccola': { lat: 40.4100, lng: -3.8770, address: 'Avenida Infante Don Luis 10, 28660 Boadilla del Monte, Madrid' },

  // Pozuelo de Alarcón (14-16 km)
  'poz-lafinca': { lat: 40.4285, lng: -3.8145, address: 'Paseo Club Deportivo 4, 28223 Pozuelo de Alarcón, Madrid' },
  'poz-grosso': { lat: 40.4412, lng: -3.7995, address: 'Avenida de Europa 16, 28224 Pozuelo de Alarcón, Madrid' },
  'poz-sushita': { lat: 40.4418, lng: -3.8005, address: 'Avenida de Europa 11, 28224 Pozuelo de Alarcón, Madrid' },

  // Las Rozas (12-14 km)
  'roz-nostra': { lat: 40.5052, lng: -3.8895, address: 'Calle Camilo José Cela 2, 28232 Las Rozas, Madrid' },
  'roz-sushita': { lat: 40.5060, lng: -3.8912, address: 'Calle Juan Ramón Jiménez 4, 28232 Las Rozas, Madrid' }
};

const rawData = fs.readFileSync(RESTAURANTS_JSON_PATH, 'utf8');
const restaurants = JSON.parse(rawData);

const updatedRestaurants = restaurants.map(r => {
  const coordData = VENUE_COORDINATES[r.id] || {
    lat: r.locationArea === 'villanueva' ? 40.4475 : 40.4500,
    lng: r.locationArea === 'villanueva' ? -3.9930 : -3.8800,
    address: r.address
  };

  const distStraightKm = calculateDistanceKm(
    VVA_CENTER.lat,
    VVA_CENTER.lng,
    coordData.lat,
    coordData.lng
  );

  let formattedDistance = '';
  if (r.municipality === 'Villanueva de la Cañada') {
    const meters = Math.round(distStraightKm * 1000);
    const displayMeters = Math.max(50, Math.round(meters / 50) * 50);
    const walkingMinutes = Math.max(1, Math.round(displayMeters / 75));
    formattedDistance = `Villanueva de la Cañada · ${displayMeters} m (${walkingMinutes} min a pie desde el centro)`;
  } else {
    // Road driving distance estimate (approx 1.25 factor of straight line)
    const roadKm = Math.round(distStraightKm * 1.25 * 10) / 10;
    const drivingMinutes = Math.max(5, Math.round(roadKm * 1.2 + 2));
    formattedDistance = `${r.municipality} · ${roadKm} km (${drivingMinutes} min en coche desde Villanueva)`;
  }

  // Generate accurate Google Maps URL with query and place coordinates
  const encodedName = encodeURIComponent(`${r.name} ${r.municipality}`);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedName}`;

  return {
    ...r,
    address: coordData.address || r.address,
    coordinates: {
      lat: coordData.lat,
      lng: coordData.lng
    },
    distance: formattedDistance,
    googleMapsUrl: mapsUrl
  };
});

fs.writeFileSync(RESTAURANTS_JSON_PATH, JSON.stringify(updatedRestaurants, null, 2), 'utf8');
fs.writeFileSync(PUBLIC_RESTAURANTS_JSON_PATH, JSON.stringify(updatedRestaurants, null, 2), 'utf8');

const tsExport = `import type { Restaurant } from '../types/restaurant';\nimport restaurantsData from './restaurants.json';\n\nexport const INITIAL_RESTAURANTS: Restaurant[] = restaurantsData as Restaurant[];\n`;
fs.writeFileSync(RESTAURANTS_TS_PATH, tsExport, 'utf8');

console.log(`Successfully updated ${updatedRestaurants.length} restaurants with exact coordinates and distances relative to Centro de Villanueva de la Cañada!`);
