// 代码生成时间: 2025-09-20 13:00:28
const CachingStrategy = {

  // Cache object to store loaded objects
  cache: {},

  /**
   * Loads a THREEJS object and caches it.
   * @param {string} url - The URL of the object to load.
   * @param {Function} onLoad - Callback function when the object is loaded.
   * @param {Function} onProgress - Callback function while loading the object.
   * @param {Function} onError - Callback function if an error occurs during loading.
   */
  loadObject(url, onLoad, onProgress, onError) {
    if (this.cache[url]) {
      // If the object is already cached, call onLoad directly
      onLoad(this.cache[url]);
    } else {
      // Otherwise, load the object and cache it
      new THREE.ObjectLoader().load(
        url,
        (object) => {
          this.cache[url] = object;
          onLoad(object);
        },
        onProgress,
        (error) => {
          console.error(`Error loading ${url}:`, error);
          if (onError) {
            onError(error);
          }
        }
      );
    }
  },

  /**
   * Removes an object from the cache.
   * @param {string} url - The URL of the object to remove from the cache.
   */
  clearCache(url) {
    delete this.cache[url];
  },

  /**
   * Clears the entire cache.
   */
  clearAllCache() {
    this.cache = {};
  },

  /**
   * Checks if an object is in the cache.
   * @param {string} url - The URL of the object to check.
   * @returns {boolean} - Whether the object is in the cache.
   */
  isCached(url) {
    return url in this.cache;
  },

};

// Example usage:
CachingStrategy.loadObject(
  'path/to/object.json',
  (object) => {
    console.log('Object loaded:', object);
    // Use the loaded object
  },
  (progress) => {
    console.log('Loading progress:', progress);
  },
  (error) => {
    console.error('Error loading object:', error);
  }
);
