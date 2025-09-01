// 代码生成时间: 2025-09-02 06:45:00
// threejs_cache_strategy.js
// This script demonstrates a caching strategy for managing 3D models in a THREE.js application.

class ModelCache {
  // Initialize the cache object
  constructor() {
    this.cache = {};
  }

  // Retrieve a model from the cache or load it if it's not cached
  getOrCreateModel(url, loader) {
    return new Promise((resolve, reject) => {
      // Check if the model is already in the cache
      if (this.cache[url]) {
        resolve(this.cache[url]);
      } else {
        // If not, load the model using the provided loader
        loader.load(url, (object) => {
          this.cache[url] = object;
          resolve(object);
        }, undefined, (error) => {
          reject(error);
        });
      }
    });
  }
}

// Example usage of the ModelCache
function main() {
  const cache = new ModelCache();
  const loader = new THREE.GLTFLoader();
  const modelUrl = 'path/to/your/model.gltf';

  cache.getOrCreateModel(modelUrl, loader)
    .then((model) => {
      console.log('Model loaded and added to cache:', model);
      // Add model to your scene
      scene.add(model);
    }).catch((error) => {
      console.error('Error loading model:', error);
    });
}

// Call the main function to start the application
main();