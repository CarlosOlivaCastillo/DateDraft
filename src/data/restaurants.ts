import type { Restaurant } from '../types/restaurant';

export const INITIAL_RESTAURANTS: Restaurant[] = [
  {
    "id": "boa-kobe",
    "name": "Kobe Izakaya & Robata Boadilla",
    "cuisine": "Sushi",
    "municipality": "Boadilla del Monte",
    "locationArea": "alrededores",
    "address": "Avenida del Siglo XXI 12, 28660 Boadilla del Monte, Madrid",
    "distance": "Boadilla del Monte · 11.5 km (14 min)",
    "rating": 4.9,
    "reviewCount": 470,
    "priceForTwo": 68,
    "dressCodeLevel": 8,
    "dressCodeLabel": "Elegante",
    "highlights": [
      "Cortes premium de salmón noruego y atún rojo",
      "Parrilla japonesa Robatayaki",
      "Luz tenue y reservados"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Kobe+Izakaya+Boadilla",
    "reviews": [
      {
        "author": "Carlos Medina",
        "rating": 5,
        "date": "Hace 1 mes",
        "comment": "Nigiris con equilibrio de arroz y temperatura perfecto. Sin duda uno de los mejores de la zona oeste."
      }
    ],
    "images": [
      "/photos/boa-kobe/photo-1.jpg",
      "/photos/boa-kobe/photo-2.jpg",
      "/photos/boa-kobe/photo-3.jpg"
    ]
  },
  {
    "id": "poz-sushita",
    "name": "Sushita Café Pozuelo",
    "cuisine": "Sushi",
    "municipality": "Pozuelo de Alarcón",
    "locationArea": "alrededores",
    "address": "Avenida de Europa 11, 28224 Pozuelo de Alarcón, Madrid",
    "distance": "Pozuelo de Alarcón · 12.8 km (14 min)",
    "rating": 4.8,
    "reviewCount": 820,
    "priceForTwo": 60,
    "dressCodeLevel": 7,
    "dressCodeLabel": "Smart Chic",
    "highlights": [
      "Decoración botánica exuberante",
      "Nigiris de pez mantequilla con trufa",
      "Coctelería de autor"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Sushita+Cafe+Pozuelo",
    "reviews": [
      {
        "author": "Nuria Albelda",
        "rating": 5,
        "date": "Hace 3 semanas",
        "comment": "La decoración es preciosa y los platos están deliciosos. Para una cita es top."
      }
    ],
    "images": [
      "/photos/poz-sushita/photo-1.jpg",
      "/photos/poz-sushita/photo-2.jpg",
      "/photos/poz-sushita/photo-3.jpg"
    ]
  },
  {
    "id": "poz-grosso",
    "name": "Grosso Napoletano Pozuelo",
    "cuisine": "Italiano",
    "municipality": "Pozuelo de Alarcón",
    "locationArea": "alrededores",
    "address": "Avenida de Europa 16, 28224 Pozuelo de Alarcón, Madrid",
    "distance": "Pozuelo de Alarcón · 12.5 km (14 min)",
    "rating": 4.8,
    "reviewCount": 750,
    "priceForTwo": 44,
    "dressCodeLevel": 6,
    "dressCodeLabel": "Smart Casual",
    "highlights": [
      "Horno de leña napolitano tradicional",
      "Masa fermentada 48h",
      "Postre Isempre Dolce"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Grosso+Napoletano+Pozuelo",
    "reviews": [
      {
        "author": "Álvaro Herrero",
        "rating": 5,
        "date": "Hace 2 semanas",
        "comment": "La auténtica pizza napolitana sin necesidad de ir al centro de Madrid. Top absoluto."
      }
    ],
    "images": [
      "/photos/poz-grosso/photo-1.jpg",
      "/photos/poz-grosso/photo-2.jpg",
      "/photos/poz-grosso/photo-3.jpg",
      "/photos/poz-grosso/photo-4.jpg"
    ]
  },
  {
    "id": "maj-nonnamia",
    "name": "Nonna Mia Osteria",
    "cuisine": "Italiano",
    "municipality": "Majadahonda",
    "locationArea": "alrededores",
    "address": "Gran Vía 42, 28220 Majadahonda, Madrid",
    "distance": "Majadahonda · 9.2 km (12 min)",
    "rating": 4.8,
    "reviewCount": 630,
    "priceForTwo": 52,
    "dressCodeLevel": 6,
    "dressCodeLabel": "Smart Casual",
    "highlights": [
      "Pizzas napolitanas al horno de leña",
      "Burrata de Puglia importada",
      "Cócteles Spritz"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Nonna+Mia+Majadahonda",
    "reviews": [
      {
        "author": "Valeria Cano",
        "rating": 5,
        "date": "Hace 1 mes",
        "comment": "La masa de las pizzas es ligera y con borde crujiente. El local tiene un ambiente muy acogedor."
      }
    ],
    "images": [
      "/photos/maj-nonnamia/photo-1.jpg",
      "/photos/maj-nonnamia/photo-2.jpg",
      "/photos/maj-nonnamia/photo-3.jpg",
      "/photos/maj-nonnamia/photo-4.jpg"
    ]
  },
  {
    "id": "vva-viajera",
    "name": "La Viajera Burger & Beer",
    "cuisine": "Burguer",
    "municipality": "Villanueva de la Cañada",
    "locationArea": "villanueva",
    "address": "Calle Cristo 26, 28691 Villanueva de la Cañada, Madrid",
    "distance": "Villanueva de la Cañada · 250 m",
    "rating": 4.8,
    "reviewCount": 520,
    "priceForTwo": 30,
    "dressCodeLevel": 3,
    "dressCodeLabel": "Casual & Desenfadado",
    "highlights": [
      "Hamburguesas gourmet icónicas",
      "Cervezas artesanas de grifo",
      "Terraza animada para parejas"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=La+Viajera+Villanueva+de+la+Cañada",
    "reviews": [
      {
        "author": "Antonio M",
        "rating": 5,
        "date": "Hace 2 meses",
        "comment": "Precio bueno y mejores tapas."
      },
      {
        "author": "Luis L",
        "rating": 4,
        "date": "Hace 2 meses",
        "comment": "Es un sitio barato para tomarte unas cañas y comer a base de tapas, en este bar prima la cantidad y la calidad. Muy rápidos."
      },
      {
        "author": "Elena Marticorena",
        "rating": 4,
        "date": "Hace 5 meses",
        "comment": "Pan sin gluten muy conseguido en las hamburguesas y buena terraza."
      }
    ],
    "images": [
      "/photos/vva-viajera/photo-1.jpg",
      "/photos/vva-viajera/photo-2.jpg",
      "/photos/vva-viajera/photo-3.jpg",
      "/photos/vva-viajera/photo-4.jpg"
    ]
  },
  {
    "id": "vva-pulperia",
    "name": "La Pulpería de Victoria",
    "cuisine": "Carne",
    "municipality": "Villanueva de la Cañada",
    "locationArea": "villanueva",
    "address": "Calle Real 22, 28691 Villanueva de la Cañada, Madrid",
    "distance": "Villanueva de la Cañada · 300 m",
    "rating": 4.8,
    "reviewCount": 460,
    "priceForTwo": 58,
    "dressCodeLevel": 6,
    "dressCodeLabel": "Smart Casual",
    "highlights": [
      "Carne gallega a la brasa",
      "Pulpo a feira tradicional",
      "Albariño y Mencía de bodega"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=La+Pulperia+de+Victoria+Villanueva+de+la+Cañada",
    "reviews": [
      {
        "author": "Patricia Gil",
        "rating": 5,
        "date": "Hace 1 mes",
        "comment": "El solomillo de ternera y el pulpo son espectaculares. El ambiente es perfecto para cenar en pareja."
      },
      {
        "author": "Manuel Vega",
        "rating": 5,
        "date": "Hace 2 meses",
        "comment": "Excelente materia prima y servicio de sala muy profesional."
      }
    ],
    "images": [
      "/photos/vva-pulperia/photo-1.jpg",
      "/photos/vva-pulperia/photo-2.jpg",
      "/photos/vva-pulperia/photo-3.jpg",
      "/photos/vva-pulperia/photo-4.jpg"
    ]
  },
  {
    "id": "vva-gustibus",
    "name": "De Gustibus Trattoria",
    "cuisine": "Italiano",
    "municipality": "Villanueva de la Cañada",
    "locationArea": "villanueva",
    "address": "Calle Camargo 2, 28691 Villanueva de la Cañada, Madrid",
    "distance": "Villanueva de la Cañada · 350 m",
    "rating": 4.8,
    "reviewCount": 412,
    "priceForTwo": 46,
    "dressCodeLevel": 6,
    "dressCodeLabel": "Smart Casual",
    "highlights": [
      "Pasta fresca casera al huevo",
      "Pizzas al horno de piedra",
      "Ambiente íntimo italiano"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=De+Gustibus+Villanueva+de+la+Cañada",
    "reviews": [
      {
        "author": "GAS",
        "rating": 5,
        "date": "Hace 3 meses",
        "comment": "Buena Mortadela y burrata de entrada, la pizza muy rica y el pizzero super atento. Franki un caballero con su atención."
      },
      {
        "author": "María",
        "rating": 5,
        "date": "Hace 3 meses",
        "comment": "Una experiencia maravillosa. Comida buenísima y al inicio nos sirvieron unas tapas muy buenas."
      }
    ],
    "images": [
      "/photos/vva-gustibus/photo-1.jpg",
      "/photos/vva-gustibus/photo-2.jpg",
      "/photos/vva-gustibus/photo-3.jpg",
      "/photos/vva-gustibus/photo-4.jpg"
    ]
  },
  {
    "id": "vva-kobesushi",
    "name": "Kobe Sushi Lounge Villanueva",
    "cuisine": "Sushi",
    "municipality": "Villanueva de la Cañada",
    "locationArea": "villanueva",
    "address": "Avenida de la Universidad 8, 28691 Villanueva de la Cañada, Madrid",
    "distance": "Villanueva de la Cañada · 450 m",
    "rating": 4.8,
    "reviewCount": 310,
    "priceForTwo": 54,
    "dressCodeLevel": 7,
    "dressCodeLabel": "Elegante Casual",
    "highlights": [
      "Uramakis de salmón flambeado",
      "Gyozas caseras al vapor",
      "Ambiente íntimo con luz tenue"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Sushi+Villanueva+de+la+Cañada",
    "reviews": [
      {
        "author": "Marta Soler",
        "rating": 5,
        "date": "Hace 2 semanas",
        "comment": "El sushi está fresquísimo y el local tiene una iluminación tenue perfecta para parejas."
      }
    ],
    "images": [
      "/photos/vva-kobesushi/photo-1.jpg",
      "/photos/vva-kobesushi/photo-2.jpg",
      "/photos/vva-kobesushi/photo-3.jpg"
    ]
  },
  {
    "id": "vva-atenea",
    "name": "Café & Brunch Atenea",
    "cuisine": "Desayuno / Merienda",
    "municipality": "Villanueva de la Cañada",
    "locationArea": "villanueva",
    "address": "Calle Real 16, 28691 Villanueva de la Cañada, Madrid",
    "distance": "Villanueva de la Cañada · 280 m",
    "rating": 4.8,
    "reviewCount": 210,
    "priceForTwo": 18,
    "dressCodeLevel": 3,
    "dressCodeLabel": "Café & Dulces",
    "highlights": [
      "Tostadas con masa madre y aguacate",
      "Café de especialidad",
      "Tartas caseras de queso y zanahoria"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe+Atenea+Villanueva+de+la+Cañada",
    "reviews": [
      {
        "author": "Lucía Bermejo",
        "rating": 5,
        "date": "Hace 1 semana",
        "comment": "Las tostadas con pan de masa madre y huevo poché están increíbles."
      }
    ],
    "images": [
      "/photos/vva-atenea/photo-1.jpg",
      "/photos/vva-atenea/photo-2.jpg",
      "/photos/vva-atenea/photo-3.jpg"
    ]
  },
  {
    "id": "maj-goiko",
    "name": "Goiko Grill Majadahonda",
    "cuisine": "Burguer",
    "municipality": "Majadahonda",
    "locationArea": "alrededores",
    "address": "Carretera de Pozuelo 48, 28220 Majadahonda, Madrid",
    "distance": "Majadahonda · 8.9 km (11 min)",
    "rating": 4.7,
    "reviewCount": 810,
    "priceForTwo": 36,
    "dressCodeLevel": 4,
    "dressCodeLabel": "Casual & Urbano",
    "highlights": [
      "Hamburguesa Kevin Bacon",
      "Tequeños con salsa dulce",
      "Ambiente moderno para citas"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Goiko+Majadahonda",
    "reviews": [
      {
        "author": "Nacho Prieto",
        "rating": 5,
        "date": "Hace 3 semanas",
        "comment": "Las hamburguesas siempre en su punto, servicio impecable y local muy cómodo."
      }
    ],
    "images": [
      "/photos/maj-goiko/photo-1.jpg",
      "/photos/maj-goiko/photo-2.jpg",
      "/photos/maj-goiko/photo-3.jpg",
      "/photos/maj-goiko/photo-4.jpg"
    ]
  },
  {
    "id": "roz-sushita",
    "name": "Sushita Café Las Rozas",
    "cuisine": "Sushi",
    "municipality": "Las Rozas",
    "locationArea": "alrededores",
    "address": "Calle Camilo José Cela 2, 28232 Las Rozas, Madrid",
    "distance": "Las Rozas · 12.0 km (14 min)",
    "rating": 4.7,
    "reviewCount": 680,
    "priceForTwo": 58,
    "dressCodeLevel": 7,
    "dressCodeLabel": "Smart Chic",
    "highlights": [
      "Decoración vegetal exuberante",
      "Nigiris de pez mantequilla con trufa",
      "Postres de autor"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Sushita+Cafe+Las+Rozas",
    "reviews": [
      {
        "author": "Belén Morales",
        "rating": 5,
        "date": "Hace 2 semanas",
        "comment": "Ambiente espectacular y comida riquísima."
      }
    ],
    "images": [
      "/photos/roz-sushita/photo-1.jpg",
      "/photos/roz-sushita/photo-2.jpg",
      "/photos/roz-sushita/photo-3.jpg"
    ]
  },
  {
    "id": "maj-guetaria",
    "name": "Asador Guetaria Majadahonda",
    "cuisine": "Carne",
    "municipality": "Majadahonda",
    "locationArea": "alrededores",
    "address": "Carretera de Boadilla 2, 28220 Majadahonda, Madrid",
    "distance": "Majadahonda · 8.5 km (10 min)",
    "rating": 4.7,
    "reviewCount": 580,
    "priceForTwo": 82,
    "dressCodeLevel": 8,
    "dressCodeLabel": "Elegante Tradicional",
    "highlights": [
      "Chuletón a la brasa estilo vasco",
      "Parrilla de carbón vista",
      "Bodega selecta"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Asador+Guetaria+Majadahonda",
    "reviews": [
      {
        "author": "Ignacio Barba",
        "rating": 5,
        "date": "Hace 2 semanas",
        "comment": "Punto de la carne insuperable y servicio de los de toda la vida."
      }
    ],
    "images": [
      "/photos/maj-guetaria/photo-1.jpg",
      "/photos/maj-guetaria/photo-2.jpg",
      "/photos/maj-guetaria/photo-3.jpg",
      "/photos/maj-guetaria/photo-4.jpg"
    ]
  },
  {
    "id": "boa-acebo",
    "name": "Restaurante El Acebo de Boadilla",
    "cuisine": "Carne",
    "municipality": "Boadilla del Monte",
    "locationArea": "alrededores",
    "address": "Avenida del Siglo XXI 16, 28660 Boadilla del Monte, Madrid",
    "distance": "Boadilla del Monte · 11.2 km (13 min)",
    "rating": 4.7,
    "reviewCount": 520,
    "priceForTwo": 65,
    "dressCodeLevel": 7,
    "dressCodeLabel": "Elegante Asturiano",
    "highlights": [
      "Carnes rojas a la parrilla",
      "Fabada y sidrería asturiana",
      "Terraza climatizada"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=El+Acebo+Boadilla",
    "reviews": [
      {
        "author": "Federico Sanz",
        "rating": 5,
        "date": "Hace 2 semanas",
        "comment": "Excelente carne roja y atención de sala impecable."
      }
    ],
    "images": [
      "/photos/boa-acebo/photo-1.jpg",
      "/photos/boa-acebo/photo-2.jpg",
      "/photos/boa-acebo/photo-3.jpg",
      "/photos/boa-acebo/photo-4.jpg"
    ]
  },
  {
    "id": "poz-lafinca",
    "name": "La Finca Brasa & Fuego",
    "cuisine": "Carne",
    "municipality": "Pozuelo de Alarcón",
    "locationArea": "alrededores",
    "address": "Paseo del Club Deportivo 4, 28223 Pozuelo de Alarcón, Madrid",
    "distance": "Pozuelo de Alarcón · 13.8 km (15 min)",
    "rating": 4.7,
    "reviewCount": 520,
    "priceForTwo": 78,
    "dressCodeLevel": 8,
    "dressCodeLabel": "Elegante & Exclusivo",
    "highlights": [
      "Chuletones madurados 60 días",
      "Entorno elegante con jardines",
      "Servicio de sommelier"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=La+Finca+Pozuelo+Restaurante",
    "reviews": [
      {
        "author": "Raúl Domínguez",
        "rating": 5,
        "date": "Hace 1 mes",
        "comment": "Corte impecable, sabor profundo y ambiente distinguido. Ideal para una ocasión especial."
      }
    ],
    "images": [
      "/photos/poz-lafinca/photo-1.jpg",
      "/photos/poz-lafinca/photo-2.jpg",
      "/photos/poz-lafinca/photo-3.jpg",
      "/photos/poz-lafinca/photo-4.jpg"
    ]
  },
  {
    "id": "boa-piccola",
    "name": "Trattoria Piccola Boadilla",
    "cuisine": "Italiano",
    "municipality": "Boadilla del Monte",
    "locationArea": "alrededores",
    "address": "Avenida Infante Don Luis 14, 28660 Boadilla del Monte, Madrid",
    "distance": "Boadilla del Monte · 11.8 km (14 min)",
    "rating": 4.7,
    "reviewCount": 490,
    "priceForTwo": 48,
    "dressCodeLevel": 6,
    "dressCodeLabel": "Smart Casual",
    "highlights": [
      "Pastas rellenas artesanas",
      "Pizzas al horno de leña",
      "Tiramisú casero"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Trattoria+Piccola+Boadilla",
    "reviews": [
      {
        "author": "Mateo Ortiz",
        "rating": 5,
        "date": "Hace 3 semanas",
        "comment": "La pasta fresca y la pizza son riquísimas. Muy buen ambiente."
      }
    ],
    "images": [
      "/photos/boa-piccola/photo-1.jpg",
      "/photos/boa-piccola/photo-2.jpg",
      "/photos/boa-piccola/photo-3.jpg",
      "/photos/boa-piccola/photo-4.jpg"
    ]
  },
  {
    "id": "bru-cortijo",
    "name": "Asador El Cortijo Brunete",
    "cuisine": "Carne",
    "municipality": "Brunete",
    "locationArea": "alrededores",
    "address": "Calle Real de San Sebastián 14, 28690 Brunete, Madrid",
    "distance": "Brunete · 4.8 km (7 min)",
    "rating": 4.7,
    "reviewCount": 430,
    "priceForTwo": 54,
    "dressCodeLevel": 5,
    "dressCodeLabel": "Rústico Asador",
    "highlights": [
      "Chuletón a la brasa de encina",
      "Cordero asado en horno de leña",
      "Postres caseros"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Asador+El+Cortijo+Brunete",
    "reviews": [
      {
        "author": "Jorge Herrero",
        "rating": 5,
        "date": "Hace 3 semanas",
        "comment": "Excelente carne a la brasa y raciones muy generosas."
      }
    ],
    "images": [
      "/photos/bru-cortijo/photo-1.jpg",
      "/photos/bru-cortijo/photo-2.jpg",
      "/photos/bru-cortijo/photo-3.jpg",
      "/photos/bru-cortijo/photo-4.jpg"
    ]
  },
  {
    "id": "vva-laurel",
    "name": "El Laurel Jardín & Tapas",
    "cuisine": "Italiano",
    "municipality": "Villanueva de la Cañada",
    "locationArea": "villanueva",
    "address": "Calle Arquitectura 7, 28691 Villanueva de la Cañada, Madrid",
    "distance": "Villanueva de la Cañada · 550 m",
    "rating": 4.7,
    "reviewCount": 380,
    "priceForTwo": 42,
    "dressCodeLevel": 5,
    "dressCodeLabel": "Casual Elegante",
    "highlights": [
      "Patio ajardinado con encanto",
      "Cocina mediterránea e italiana fusión",
      "Postres caseros"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=El+Laurel+Villanueva+de+la+Cañada",
    "reviews": [
      {
        "author": "Claudia Moreno",
        "rating": 5,
        "date": "Hace 2 semanas",
        "comment": "El patio interior por la noche es precioso. Platos bien elaborados y ambiente tranquilo."
      }
    ],
    "images": [
      "/photos/vva-laurel/photo-1.jpg",
      "/photos/vva-laurel/photo-2.jpg",
      "/photos/vva-laurel/photo-3.jpg",
      "/photos/vva-laurel/photo-4.jpg"
    ]
  },
  {
    "id": "vva-italiana",
    "name": "All’Italiana Ristorante",
    "cuisine": "Italiano",
    "municipality": "Villanueva de la Cañada",
    "locationArea": "villanueva",
    "address": "Calle Cristo 34, 28691 Villanueva de la Cañada, Madrid",
    "distance": "Villanueva de la Cañada · 400 m",
    "rating": 4.7,
    "reviewCount": 320,
    "priceForTwo": 42,
    "dressCodeLevel": 5,
    "dressCodeLabel": "Casual Elegante",
    "highlights": [
      "Pizzas artesanales napolitanas",
      "Lasaña casera de la nonna",
      "Limoncello de cortesía"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=All+Italiana+Villanueva+de+la+Cañada",
    "reviews": [
      {
        "author": "Pablo Méndez",
        "rating": 5,
        "date": "Hace 1 mes",
        "comment": "Las pizzas tienen la masa fina perfecta. Ambiente muy agradable y familiar."
      },
      {
        "author": "Carla Blanco",
        "rating": 5,
        "date": "Hace 2 meses",
        "comment": "Muy buena pasta y trato cercano. Ideal para una cena relajada."
      }
    ],
    "images": [
      "/photos/vva-italiana/photo-1.jpg",
      "/photos/vva-italiana/photo-2.jpg",
      "/photos/vva-italiana/photo-3.jpg",
      "/photos/vva-italiana/photo-4.jpg"
    ]
  },
  {
    "id": "vva-ladescarada",
    "name": "La Descarada Gastrobar",
    "cuisine": "Burguer",
    "municipality": "Villanueva de la Cañada",
    "locationArea": "villanueva",
    "address": "Calle Camargo 14, 28691 Villanueva de la Cañada, Madrid",
    "distance": "Villanueva de la Cañada · 390 m",
    "rating": 4.7,
    "reviewCount": 310,
    "priceForTwo": 35,
    "dressCodeLevel": 4,
    "dressCodeLabel": "Casual Chic",
    "highlights": [
      "Burgers de autor con queso brie",
      "Croquetas cremosas caseras",
      "Terraza chill out"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=La+Descarada+Villanueva+de+la+Cañada",
    "reviews": [
      {
        "author": "Mario San Juan",
        "rating": 5,
        "date": "Hace 1 mes",
        "comment": "Las croquetas y las hamburguesas son de diez. Muy agradable la terraza."
      }
    ],
    "images": [
      "/photos/vva-ladescarada/photo-1.jpg",
      "/photos/vva-ladescarada/photo-2.jpg",
      "/photos/vva-ladescarada/photo-3.jpg",
      "/photos/vva-ladescarada/photo-4.jpg"
    ]
  },
  {
    "id": "vva-yuzu",
    "name": "Yuzu Asian & Sushi Lounge",
    "cuisine": "Sushi",
    "municipality": "Villanueva de la Cañada",
    "locationArea": "villanueva",
    "address": "Calle Real 25, 28691 Villanueva de la Cañada, Madrid",
    "distance": "Villanueva de la Cañada · 380 m",
    "rating": 4.7,
    "reviewCount": 265,
    "priceForTwo": 48,
    "dressCodeLevel": 6,
    "dressCodeLabel": "Smart Casual",
    "highlights": [
      "Nigiris de autor con trufa",
      "Tartar de atún rojo",
      "Cócteles exóticos"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Yuzu+Sushi+Villanueva+de+la+Cañada",
    "reviews": [
      {
        "author": "Sara Bellido",
        "rating": 5,
        "date": "Hace 3 semanas",
        "comment": "Pescado de gran calidad, presentación cuidada y mesas tranquilas para charlar."
      }
    ],
    "images": [
      "/photos/vva-yuzu/photo-1.jpg",
      "/photos/vva-yuzu/photo-2.jpg",
      "/photos/vva-yuzu/photo-3.jpg"
    ]
  },
  {
    "id": "vva-horno",
    "name": "Pastelería & Obrador El Horno de la Cañada",
    "cuisine": "Desayuno / Merienda",
    "municipality": "Villanueva de la Cañada",
    "locationArea": "villanueva",
    "address": "Calle Cristo 8, 28691 Villanueva de la Cañada, Madrid",
    "distance": "Villanueva de la Cañada · 350 m",
    "rating": 4.7,
    "reviewCount": 195,
    "priceForTwo": 16,
    "dressCodeLevel": 2,
    "dressCodeLabel": "Obrador Artesano",
    "highlights": [
      "Croissants de mantequilla recién horneados",
      "Palmeras de chocolate fondant",
      "Zumo de naranja recién exprimido"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Pasteleria+El+Horno+Villanueva+de+la+Cañada",
    "reviews": [
      {
        "author": "Paloma Vargas",
        "rating": 5,
        "date": "Hace 2 semanas",
        "comment": "Los croissants de mantequilla y las palmeras recién hechas son insuperables."
      }
    ],
    "images": [
      "/photos/vva-horno/photo-1.jpg",
      "/photos/vva-horno/photo-2.jpg",
      "/photos/vva-horno/photo-3.jpg"
    ]
  },
  {
    "id": "vva-sweetcoffee",
    "name": "Sweet & Coffee Corner Villanueva",
    "cuisine": "Desayuno / Merienda",
    "municipality": "Villanueva de la Cañada",
    "locationArea": "villanueva",
    "address": "Calle Empedrada 4, 28691 Villanueva de la Cañada, Madrid",
    "distance": "Villanueva de la Cañada · 550 m",
    "rating": 4.7,
    "reviewCount": 185,
    "priceForTwo": 20,
    "dressCodeLevel": 3,
    "dressCodeLabel": "Café Moderno",
    "highlights": [
      "Bowls de açaí con fruta fresca",
      "Pancakes con sirope de arce",
      "Matcha latte y smoothies"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Sweet+Coffee+Villanueva+de+la+Cañada",
    "reviews": [
      {
        "author": "Paula Saiz",
        "rating": 5,
        "date": "Hace 1 semana",
        "comment": "Pancakes esponjosos con frutos rojos y sirope de arce. Decoración muy bonita."
      }
    ],
    "images": [
      "/photos/vva-sweetcoffee/photo-1.jpg",
      "/photos/vva-sweetcoffee/photo-2.jpg",
      "/photos/vva-sweetcoffee/photo-3.jpg"
    ]
  },
  {
    "id": "maj-misssushi",
    "name": "Miss Sushi Majadahonda",
    "cuisine": "Sushi",
    "municipality": "Majadahonda",
    "locationArea": "alrededores",
    "address": "Calle Moreras 42, 28220 Majadahonda, Madrid",
    "distance": "Majadahonda · 9.5 km (12 min)",
    "rating": 4.6,
    "reviewCount": 640,
    "priceForTwo": 52,
    "dressCodeLevel": 6,
    "dressCodeLabel": "Chic Moderno",
    "highlights": [
      "Sushi creativo fusión",
      "Decoración sofisticada en tonos rosa",
      "Cócteles de autor"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Miss+Sushi+Majadahonda",
    "reviews": [
      {
        "author": "Marta Solano",
        "rating": 5,
        "date": "Hace 3 semanas",
        "comment": "Decoración preciosa y platos variados para compartir en pareja."
      }
    ],
    "images": [
      "/photos/maj-misssushi/photo-1.jpg",
      "/photos/maj-misssushi/photo-2.jpg",
      "/photos/maj-misssushi/photo-3.jpg"
    ]
  },
  {
    "id": "roz-nostra",
    "name": "Hamburguesa Nostra Las Rozas",
    "cuisine": "Burguer",
    "municipality": "Las Rozas",
    "locationArea": "alrededores",
    "address": "Calle Camilo José Cela 2, 28232 Las Rozas, Madrid",
    "distance": "Las Rozas · 11.2 km (13 min)",
    "rating": 4.6,
    "reviewCount": 620,
    "priceForTwo": 34,
    "dressCodeLevel": 4,
    "dressCodeLabel": "Casual Confort",
    "highlights": [
      "Carnes de ganadería seleccionada",
      "Panes artesanales horneados",
      "Salsas exclusivas"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Hamburguesa+Nostra+Las+Rozas",
    "reviews": [
      {
        "author": "Laura Crespo",
        "rating": 5,
        "date": "Hace 1 mes",
        "comment": "Carne jugosa y muy bien aderezada. Las patatas gajo con trufa son un acierto."
      }
    ],
    "images": [
      "/photos/roz-nostra/photo-1.jpg",
      "/photos/roz-nostra/photo-2.jpg",
      "/photos/roz-nostra/photo-3.jpg",
      "/photos/roz-nostra/photo-4.jpg"
    ]
  },
  {
    "id": "bru-pilar",
    "name": "Restaurante El Pilar",
    "cuisine": "Carne",
    "municipality": "Brunete",
    "locationArea": "alrededores",
    "address": "Plaza Mayor 6, 28690 Brunete, Madrid",
    "distance": "Brunete · 4.5 km (6 min)",
    "rating": 4.6,
    "reviewCount": 350,
    "priceForTwo": 48,
    "dressCodeLevel": 5,
    "dressCodeLabel": "Tradicional Castellano",
    "highlights": [
      "Terraza en la Plaza Mayor",
      "Guisos tradicionales",
      "Carnes de la sierra"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Restaurante+El+Pilar+Brunete",
    "reviews": [
      {
        "author": "Tomás Prieto",
        "rating": 5,
        "date": "Hace 1 mes",
        "comment": "Terraza en la plaza mayor muy agradable y solomillo tierno."
      }
    ],
    "images": [
      "/photos/bru-pilar/photo-1.jpg",
      "/photos/bru-pilar/photo-2.jpg",
      "/photos/bru-pilar/photo-3.jpg",
      "/photos/bru-pilar/photo-4.jpg"
    ]
  },
  {
    "id": "vva-brasa",
    "name": "Asador La Brasa de la Cañada",
    "cuisine": "Carne",
    "municipality": "Villanueva de la Cañada",
    "locationArea": "villanueva",
    "address": "Calle Cristo 12, 28691 Villanueva de la Cañada, Madrid",
    "distance": "Villanueva de la Cañada · 450 m",
    "rating": 4.6,
    "reviewCount": 290,
    "priceForTwo": 52,
    "dressCodeLevel": 5,
    "dressCodeLabel": "Rústico Elegante",
    "highlights": [
      "Entrecot de vaca madurada",
      "Parrilla de carbón de encina",
      "Vinos de Ribera"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Asador+La+Brasa+Villanueva+de+la+Cañada",
    "reviews": [
      {
        "author": "Fernando Ruiz",
        "rating": 5,
        "date": "Hace 3 semanas",
        "comment": "Carnes con un aroma a brasa increíble. Las mollejas y el chuletón son de diez."
      }
    ],
    "images": [
      "/photos/vva-brasa/photo-1.jpg",
      "/photos/vva-brasa/photo-2.jpg",
      "/photos/vva-brasa/photo-3.jpg",
      "/photos/vva-brasa/photo-4.jpg"
    ]
  },
  {
    "id": "vva-craftburger",
    "name": "Craft Burger Lab",
    "cuisine": "Burguer",
    "municipality": "Villanueva de la Cañada",
    "locationArea": "villanueva",
    "address": "Calle Cristo 19, 28691 Villanueva de la Cañada, Madrid",
    "distance": "Villanueva de la Cañada · 300 m",
    "rating": 4.6,
    "reviewCount": 289,
    "priceForTwo": 32,
    "dressCodeLevel": 3,
    "dressCodeLabel": "Casual & Relajado",
    "highlights": [
      "Carne de buey picada a diario",
      "Pan brioche artesano",
      "Cervezas de autor"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Craft+Burger+Villanueva+de+la+Cañada",
    "reviews": [
      {
        "author": "David Navarro",
        "rating": 5,
        "date": "Hace 3 semanas",
        "comment": "Hamburguesas espectaculares. El pan brioche es suave y la carne muy sabrosa."
      }
    ],
    "images": [
      "/photos/vva-craftburger/photo-1.jpg",
      "/photos/vva-craftburger/photo-2.jpg",
      "/photos/vva-craftburger/photo-3.jpg",
      "/photos/vva-craftburger/photo-4.jpg"
    ]
  },
  {
    "id": "bru-pizzeria",
    "name": "Pizzería Trattoria Brunete",
    "cuisine": "Italiano",
    "municipality": "Brunete",
    "locationArea": "alrededores",
    "address": "Calle Caridad 8, 28690 Brunete, Madrid",
    "distance": "Brunete · 4.6 km (6 min)",
    "rating": 4.6,
    "reviewCount": 280,
    "priceForTwo": 36,
    "dressCodeLevel": 4,
    "dressCodeLabel": "Casual Italiano",
    "highlights": [
      "Masa fina crujiente artesanal",
      "Calzones rellenos",
      "Pasta casera"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Pizzeria+Brunete",
    "reviews": [
      {
        "author": "Nuria Beltrán",
        "rating": 5,
        "date": "Hace 2 semanas",
        "comment": "Masa fina con ingredientes frescos, muy rica la pizza prosciutto."
      }
    ],
    "images": [
      "/photos/bru-pizzeria/photo-1.jpg",
      "/photos/bru-pizzeria/photo-2.jpg",
      "/photos/bru-pizzeria/photo-3.jpg",
      "/photos/bru-pizzeria/photo-4.jpg"
    ]
  },
  {
    "id": "vva-lagoleta",
    "name": "Taberna La Goleta",
    "cuisine": "Carne",
    "municipality": "Villanueva de la Cañada",
    "locationArea": "villanueva",
    "address": "Calle Valle del Roncal 5, 28691 Villanueva de la Cañada, Madrid",
    "distance": "Villanueva de la Cañada · 480 m",
    "rating": 4.6,
    "reviewCount": 275,
    "priceForTwo": 38,
    "dressCodeLevel": 4,
    "dressCodeLabel": "Tapas & Raciones",
    "highlights": [
      "Raciones generosas para compartir",
      "Huevos rotos con jamón de bellota",
      "Vinos por copas"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Taberna+La+Goleta+Villanueva+de+la+Cañada",
    "reviews": [
      {
        "author": "Enrique Beltrán",
        "rating": 5,
        "date": "Hace 2 semanas",
        "comment": "Raciones grandes y ricas, buen ambiente para picar algo."
      }
    ],
    "images": [
      "/photos/vva-lagoleta/photo-1.jpg",
      "/photos/vva-lagoleta/photo-2.jpg",
      "/photos/vva-lagoleta/photo-3.jpg",
      "/photos/vva-lagoleta/photo-4.jpg"
    ]
  },
  {
    "id": "vva-sangines",
    "name": "Churrería Chocolatería San Ginés Express Villanueva",
    "cuisine": "Desayuno / Merienda",
    "municipality": "Villanueva de la Cañada",
    "locationArea": "villanueva",
    "address": "Avenida de la Universidad 12, 28691 Villanueva de la Cañada, Madrid",
    "distance": "Villanueva de la Cañada · 450 m",
    "rating": 4.6,
    "reviewCount": 230,
    "priceForTwo": 14,
    "dressCodeLevel": 2,
    "dressCodeLabel": "Tradicional",
    "highlights": [
      "Churros y porras crujientes artesanas",
      "Chocolate a la taza espeso",
      "Desayunos tradicionales"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=San+Gines+Villanueva+de+la+Cañada",
    "reviews": [
      {
        "author": "Inés Cordero",
        "rating": 5,
        "date": "Hace 3 semanas",
        "comment": "Churros y porras dorados y chocolate caliente bien espeso."
      }
    ],
    "images": [
      "/photos/vva-sangines/photo-1.jpg",
      "/photos/vva-sangines/photo-2.jpg",
      "/photos/vva-sangines/photo-3.jpg"
    ]
  },
  {
    "id": "vva-polloscanada",
    "name": "Pollos Asados La Cañada Gourmet",
    "cuisine": "Pollo",
    "municipality": "Villanueva de la Cañada",
    "locationArea": "villanueva",
    "address": "Calle Real 31, 28691 Villanueva de la Cañada, Madrid",
    "distance": "Villanueva de la Cañada · 380 m",
    "rating": 4.6,
    "reviewCount": 165,
    "priceForTwo": 26,
    "dressCodeLevel": 3,
    "dressCodeLabel": "Informal & Casero",
    "highlights": [
      "Pollo asado estilo tradicional",
      "Patatas panaderas aromatizadas",
      "Cervezas bien frías"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Pollos+Asados+La+Cañada+Villanueva",
    "reviews": [
      {
        "author": "Teresa Cano",
        "rating": 5,
        "date": "Hace 1 mes",
        "comment": "El jugo del asado y las patatas están espectaculares."
      }
    ],
    "images": [
      "/photos/vva-polloscanada/photo-1.jpg",
      "/photos/vva-polloscanada/photo-2.jpg",
      "/photos/vva-polloscanada/photo-3.jpg"
    ]
  },
  {
    "id": "vva-sakura",
    "name": "Sakura Wok & Roll",
    "cuisine": "Sushi",
    "municipality": "Villanueva de la Cañada",
    "locationArea": "villanueva",
    "address": "Avenida de Madrid 30, 28691 Villanueva de la Cañada, Madrid",
    "distance": "Villanueva de la Cañada · 620 m",
    "rating": 4.5,
    "reviewCount": 240,
    "priceForTwo": 42,
    "dressCodeLevel": 5,
    "dressCodeLabel": "Asiático Casual",
    "highlights": [
      "Rolls crujientes tempurizados",
      "Noodles al wok",
      "Mochis artesanos de té verde"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Sakura+Sushi+Villanueva+de+la+Cañada",
    "reviews": [
      {
        "author": "Guillermo Nieto",
        "rating": 5,
        "date": "Hace 3 semanas",
        "comment": "Rolls muy sabrosos y servicio atento."
      }
    ],
    "images": [
      "/photos/vva-sakura/photo-1.jpg",
      "/photos/vva-sakura/photo-2.jpg",
      "/photos/vva-sakura/photo-3.jpg"
    ]
  },
  {
    "id": "vva-fogon",
    "name": "El Fogón de la Cañada",
    "cuisine": "Carne",
    "municipality": "Villanueva de la Cañada",
    "locationArea": "villanueva",
    "address": "Avenida de Gaudí 18, 28691 Villanueva de la Cañada, Madrid",
    "distance": "Villanueva de la Cañada · 600 m",
    "rating": 4.5,
    "reviewCount": 230,
    "priceForTwo": 48,
    "dressCodeLevel": 4,
    "dressCodeLabel": "Casual Asador",
    "highlights": [
      "Chuletitas de cordero lechal",
      "Embutidos ibéricos al corte",
      "Ambiente tradicional"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=El+Fogon+Villanueva+de+la+Cañada",
    "reviews": [
      {
        "author": "Alba Ramos",
        "rating": 5,
        "date": "Hace 1 mes",
        "comment": "Excelente atención y comida casera muy cuidada."
      }
    ],
    "images": [
      "/photos/vva-fogon/photo-1.jpg",
      "/photos/vva-fogon/photo-2.jpg",
      "/photos/vva-fogon/photo-3.jpg",
      "/photos/vva-fogon/photo-4.jpg"
    ]
  },
  {
    "id": "vva-bosforo",
    "name": "Bósforo Anatolia Grill",
    "cuisine": "Kebab",
    "municipality": "Villanueva de la Cañada",
    "locationArea": "villanueva",
    "address": "Avenida Juan Gris 8, 28691 Villanueva de la Cañada, Madrid",
    "distance": "Villanueva de la Cañada · 500 m",
    "rating": 4.5,
    "reviewCount": 215,
    "priceForTwo": 22,
    "dressCodeLevel": 2,
    "dressCodeLabel": "Informal & Rápido",
    "highlights": [
      "Pan lavash horneado al momento",
      "Carne 100% ternera y cordero",
      "Especialidades turcas"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Kebab+Villanueva+de+la+Cañada",
    "reviews": [
      {
        "author": "Sergio Castro",
        "rating": 5,
        "date": "Hace 2 semanas",
        "comment": "Pan turco recién horneado y carne limpia y especiada con gusto."
      }
    ],
    "images": [
      "/photos/vva-bosforo/photo-1.jpg",
      "/photos/vva-bosforo/photo-2.jpg",
      "/photos/vva-bosforo/photo-3.jpg"
    ]
  },
  {
    "id": "vva-pollosvalle",
    "name": "Asador Leña y Pollos El Valle",
    "cuisine": "Pollo",
    "municipality": "Villanueva de la Cañada",
    "locationArea": "villanueva",
    "address": "Calle Empedrada 11, 28691 Villanueva de la Cañada, Madrid",
    "distance": "Villanueva de la Cañada · 600 m",
    "rating": 4.5,
    "reviewCount": 198,
    "priceForTwo": 28,
    "dressCodeLevel": 3,
    "dressCodeLabel": "Casual & Acogedor",
    "highlights": [
      "Pollo campero asado a la leña",
      "Salsas caseras especiadas",
      "Raciones generosas"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Pollo+Asador+Villanueva+de+la+Cañada",
    "reviews": [
      {
        "author": "Raquel Serrano",
        "rating": 5,
        "date": "Hace 2 semanas",
        "comment": "El marinado del pollo es sensacional, piel crujiente y carne muy tierna."
      }
    ],
    "images": [
      "/photos/vva-pollosvalle/photo-1.jpg",
      "/photos/vva-pollosvalle/photo-2.jpg",
      "/photos/vva-pollosvalle/photo-3.jpg"
    ]
  },
  {
    "id": "vva-tgb",
    "name": "The Good Burger TGB Villanueva",
    "cuisine": "Burguer",
    "municipality": "Villanueva de la Cañada",
    "locationArea": "villanueva",
    "address": "Avenida de la Universidad 4, 28691 Villanueva de la Cañada, Madrid",
    "distance": "Villanueva de la Cañada · 400 m",
    "rating": 4.4,
    "reviewCount": 340,
    "priceForTwo": 24,
    "dressCodeLevel": 2,
    "dressCodeLabel": "Informal & Rápido",
    "highlights": [
      "Smash burgers rápidas",
      "Pan de mantequilla tostado",
      "Promociones para compartir"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=TGB+Villanueva+de+la+Cañada",
    "reviews": [
      {
        "author": "Alejandro Cruz",
        "rating": 4,
        "date": "Hace 1 mes",
        "comment": "Buena opción para una cena informal y rápida después de dar una vuelta."
      }
    ],
    "images": [
      "/photos/vva-tgb/photo-1.jpg",
      "/photos/vva-tgb/photo-2.jpg",
      "/photos/vva-tgb/photo-3.jpg",
      "/photos/vva-tgb/photo-4.jpg"
    ]
  },
  {
    "id": "vva-granier",
    "name": "Granier Bakery & Café Villanueva",
    "cuisine": "Desayuno / Merienda",
    "municipality": "Villanueva de la Cañada",
    "locationArea": "villanueva",
    "address": "Calle Cristo 15, 28691 Villanueva de la Cañada, Madrid",
    "distance": "Villanueva de la Cañada · 300 m",
    "rating": 4.4,
    "reviewCount": 190,
    "priceForTwo": 12,
    "dressCodeLevel": 2,
    "dressCodeLabel": "Cafetería & Panadería",
    "highlights": [
      "Café con leche cremoso",
      "Muffins artesanos",
      "Bocadillos recién tostados"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Granier+Villanueva+de+la+Cañada",
    "reviews": [
      {
        "author": "Esteban Molina",
        "rating": 4,
        "date": "Hace 1 mes",
        "comment": "Buen café y bollería recién horneada."
      }
    ],
    "images": [
      "/photos/vva-granier/photo-1.jpg",
      "/photos/vva-granier/photo-2.jpg",
      "/photos/vva-granier/photo-3.jpg"
    ]
  },
  {
    "id": "vva-istanbul",
    "name": "Istanbul Döner Kebab Villanueva",
    "cuisine": "Kebab",
    "municipality": "Villanueva de la Cañada",
    "locationArea": "villanueva",
    "address": "Calle Cristo 40, 28691 Villanueva de la Cañada, Madrid",
    "distance": "Villanueva de la Cañada · 320 m",
    "rating": 4.4,
    "reviewCount": 180,
    "priceForTwo": 20,
    "dressCodeLevel": 2,
    "dressCodeLabel": "Informal & Práctico",
    "highlights": [
      "Dürüm artesano enrollado caliente",
      "Salsa de yogur con hierbabuena",
      "Servicio exprés"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Istanbul+Kebab+Villanueva+de+la+Cañada",
    "reviews": [
      {
        "author": "Álex Marín",
        "rating": 4,
        "date": "Hace 3 semanas",
        "comment": "Dürüm bien enrollado y salsa casera muy rica."
      }
    ],
    "images": [
      "/photos/vva-istanbul/photo-1.jpg",
      "/photos/vva-istanbul/photo-2.jpg",
      "/photos/vva-istanbul/photo-3.jpg"
    ]
  },
  {
    "id": "vva-100m",
    "name": "100 Montaditos Villanueva",
    "cuisine": "Fast Food",
    "municipality": "Villanueva de la Cañada",
    "locationArea": "villanueva",
    "address": "Avenida de la Universidad 6, 28691 Villanueva de la Cañada, Madrid",
    "distance": "Villanueva de la Cañada · 400 m",
    "rating": 4.3,
    "reviewCount": 410,
    "priceForTwo": 16,
    "dressCodeLevel": 1,
    "dressCodeLabel": "Informal & Tapas",
    "highlights": [
      "Montaditos variados",
      "Tablas para compartir",
      "Jarras heladas"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=100+Montaditos+Villanueva+de+la+Cañada",
    "reviews": [
      {
        "author": "Víctor Alarcón",
        "rating": 4,
        "date": "Hace 1 mes",
        "comment": "Terraza amplia para tomar algo rápido y barato."
      }
    ],
    "images": [
      "/photos/vva-100m/photo-1.jpg",
      "/photos/vva-100m/photo-2.jpg",
      "/photos/vva-100m/photo-3.jpg"
    ]
  },
  {
    "id": "vva-dominos",
    "name": "Domino’s Pizza Villanueva",
    "cuisine": "Fast Food",
    "municipality": "Villanueva de la Cañada",
    "locationArea": "villanueva",
    "address": "Avenida de la Universidad 10, 28691 Villanueva de la Cañada, Madrid",
    "distance": "Villanueva de la Cañada · 420 m",
    "rating": 4.3,
    "reviewCount": 290,
    "priceForTwo": 22,
    "dressCodeLevel": 1,
    "dressCodeLabel": "Fast Food Casual",
    "highlights": [
      "Masa roll con borde de queso",
      "Pizzas especialidad",
      "Recogida rápida"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Dominos+Pizza+Villanueva+de+la+Cañada",
    "reviews": [
      {
        "author": "Iván Carrasco",
        "rating": 5,
        "date": "Hace 2 semanas",
        "comment": "Masa roll con borde de queso deliciosa y servicio rápido."
      }
    ],
    "images": [
      "/photos/vva-dominos/photo-1.jpg",
      "/photos/vva-dominos/photo-2.jpg",
      "/photos/vva-dominos/photo-3.jpg"
    ]
  },
  {
    "id": "vva-telepizza",
    "name": "Telepizza Villanueva de la Cañada",
    "cuisine": "Fast Food",
    "municipality": "Villanueva de la Cañada",
    "locationArea": "villanueva",
    "address": "Calle Real 18, 28691 Villanueva de la Cañada, Madrid",
    "distance": "Villanueva de la Cañada · 320 m",
    "rating": 4.2,
    "reviewCount": 220,
    "priceForTwo": 20,
    "dressCodeLevel": 1,
    "dressCodeLabel": "Fast Food Casual",
    "highlights": [
      "Pizzas masa clásica y fina",
      "Promociones para 2",
      "Servicio rápido"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Telepizza+Villanueva+de+la+Cañada",
    "reviews": [
      {
        "author": "Sergio Lozano",
        "rating": 4,
        "date": "Hace 1 mes",
        "comment": "Pizzas recién horneadas y entrega puntual."
      }
    ],
    "images": [
      "/photos/vva-telepizza/photo-1.jpg",
      "/photos/vva-telepizza/photo-2.jpg",
      "/photos/vva-telepizza/photo-3.jpg"
    ]
  }
];
