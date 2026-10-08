import { INITIAL_RESTAURANTS } from '../data/restaurants';
import type { Restaurant, UserPreferences } from '../types/restaurant';

const REST_API_URL = import.meta.env.VITE_RESTAURANTS_API_URL || null;

export class RestaurantService {
  private static localData: Restaurant[] = [...INITIAL_RESTAURANTS];

  /**
   * Fetches restaurants from a configured REST API endpoint if available,
   * otherwise returns the verified local repository.
   */
  static async getAllRestaurants(): Promise<Restaurant[]> {
    if (REST_API_URL) {
      try {
        const response = await fetch(REST_API_URL);
        if (response.ok) {
          const apiData = await response.json();
          if (Array.isArray(apiData) && apiData.length > 0) {
            return apiData;
          }
        }
      } catch (error) {
        console.warn('REST API unavailable, using internal dataset:', error);
      }
    }
    return [...this.localData];
  }

  /**
   * Allows runtime injection of new restaurant data via REST / Webhook / Mock
   */
  static injectRestaurants(newRestaurants: Restaurant[]) {
    this.localData = [...newRestaurants];
  }

  /**
   * Core decision tree filter implementation supporting multi-cuisine selection and optional dresscode
   * Returns a curated batch of 5-6 matching restaurants with seed-based rotation on REDRAFT.
   */
  static async findIdealRestaurants(
    preferences: UserPreferences,
    seedOffset: number = 0
  ): Promise<Restaurant[]> {
    const all = await this.getAllRestaurants();

    // 1. Filter by Location & Driving decision
    let filtered = all.filter((rest) => {
      if (preferences.wantsToDrive === false) {
        // Radius locked strictly to Villanueva de la Cañada
        return rest.locationArea === 'villanueva';
      }

      if (preferences.wantsToDrive === true) {
        if (preferences.driveDuration === 'ratito') {
          // Villanueva de la Cañada + Alrededores (Majadahonda, Boadilla, etc.)
          return rest.locationArea === 'villanueva' || rest.locationArea === 'alrededores';
        }
        if (preferences.driveDuration === 'mucho') {
          // Expands search to include Madrid Centro + Alrededores + Villanueva
          return true;
        }
      }

      return rest.locationArea === 'villanueva';
    });

    // 2. Filter by Multi-Cuisine Selection
    const activeCuisines = preferences.cuisines || [];
    const isRandomOrAll =
      activeCuisines.length === 0 || activeCuisines.includes('Aleatorio');

    if (!isRandomOrAll) {
      filtered = filtered.filter((r) => activeCuisines.includes(r.cuisine));
    }

    if (filtered.length === 0) {
      return [];
    }

    // 3. Sort by Dress Code proximity (if specified) + Rating
    filtered.sort((a, b) => {
      if (preferences.dressLevel !== null && preferences.dressLevel !== undefined) {
        const diffA = Math.abs(a.dressCodeLevel - preferences.dressLevel);
        const diffB = Math.abs(b.dressCodeLevel - preferences.dressLevel);

        if (diffA !== diffB) {
          return diffA - diffB;
        }
      }
      return b.rating - a.rating;
    });

    // 4. Batch & Redraft Rotation / Shuffling logic
    if (filtered.length <= 6) {
      if (seedOffset > 0) {
        // Permute order so user sees active change on REDRAFT
        const rotated = [...filtered];
        const shift = seedOffset % rotated.length;
        return [...rotated.slice(shift), ...rotated.slice(0, shift)];
      }
      return filtered;
    }

    // When there are more than 6 matching venues, perform dynamic rotational offset + pseudo-shuffle
    const pool = [...filtered];
    if (seedOffset > 0) {
      // Deterministic PRNG shuffle with seed
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.abs(Math.sin(seedOffset * 9301 + i * 49297)) * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }
    }

    return pool.slice(0, 6);
  }
}
