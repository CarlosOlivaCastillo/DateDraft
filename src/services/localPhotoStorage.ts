/**
 * Local Photo Storage Service
 * Manages local photo assets, caching, and local directory lookups (/photos/[id]/)
 */

export class LocalPhotoStorage {
  private static localPhotosMap: Map<string, string[]> = new Map();

  /**
   * Register or look up locally saved photos for a given restaurant
   */
  static getPhotosForRestaurant(restaurantId: string): string[] {
    if (this.localPhotosMap.has(restaurantId)) {
      return this.localPhotosMap.get(restaurantId)!;
    }
    return [];
  }

  /**
   * Saves or associates local photos with a restaurant in memory/cache
   */
  static saveLocalPhotos(restaurantId: string, photoUrls: string[]): void {
    this.localPhotosMap.set(restaurantId, photoUrls);
    try {
      localStorage.setItem(`photos_${restaurantId}`, JSON.stringify(photoUrls));
    } catch {
      // Ignore quota errors in storage
    }
  }

  /**
   * Initializes stored photos from local storage if available
   */
  static initFromStorage(restaurantId: string): string[] {
    try {
      const stored = localStorage.getItem(`photos_${restaurantId}`);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          this.localPhotosMap.set(restaurantId, parsed);
          return parsed;
        }
      }
    } catch {
      // Ignore parse errors
    }
    return [];
  }
}
