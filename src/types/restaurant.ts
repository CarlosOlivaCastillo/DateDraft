export type CuisineType =
  | 'Italiano'
  | 'Carne'
  | 'Burguer'
  | 'Pollo'
  | 'Kebab'
  | 'Sushi'
  | 'Fast Food'
  | 'Desayuno / Merienda'
  | 'Aleatorio';

export type DriveChoice = 'no' | 'ratito' | 'mucho';

export interface UserPreferences {
  wantsToDrive: boolean | null;
  driveDuration: 'ratito' | 'mucho' | null;
  dressLevel: number | null; // null if user chooses to skip dress code
  cuisines: CuisineType[]; // Supports multiple selected cuisines
}

export interface Review {
  id?: string;
  author: string;
  rating: number; // e.g., 5
  date: string;
  comment: string;
}

export interface Restaurant {
  id: string;
  name: string;
  rating: number; // e.g., 4.8
  reviewCount: number;
  distance: string; // e.g., "Villanueva de la Cañada · 450 m"
  locationArea: 'villanueva' | 'alrededores' | 'madrid_centro';
  municipality: string; // e.g. "Villanueva de la Cañada", "Majadahonda", "Boadilla", "Pozuelo", "Las Rozas", "Brunete"
  cuisine: CuisineType;
  dressCodeLevel: number; // 1 to 10
  dressCodeLabel: string; // e.g., "Smart Casual"
  priceForTwo: number; // e.g., 48
  currency?: string; // "€"
  images: string[]; // Local and direct photos
  reviews: Review[];
  googleMapsUrl: string;
  address: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  highlights: string[];
  aiRecommendationNote?: string;
}
