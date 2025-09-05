// 代码生成时间: 2025-09-06 05:06:15
(function() {

  // Define the ConfigManager class
  class ConfigManager {
    
    // Constructor
    constructor(config) {
      this.config = config;
    }
    
    // Load configuration from JSON file
    loadConfig(filePath) {
      return new Promise((resolve, reject) => {
        const loader = new THREE.FileLoader();
        loader.load(
          filePath, 
          (data) => {
            try {
              this.config = JSON.parse(data);
              resolve(this.config);
            } catch (error) {
              reject(new Error('Failed to parse configuration file: ' + error.message));
            }
          },
          (progress) => {
            console.log(`Loading configuration: ${progress.loaded / progress.total * 100}%`);
          },
          (error) => {
            reject(new Error('Failed to load configuration file: ' + error.message));
          }
        );
      });
    }
    
    // Get a configuration value by key
    getConfigValue(key) {
      return this.config[key];
    }
    
    // Set a configuration value by key
    setConfigValue(key, value) {
      this.config[key] = value;
    }
    
    // Save configuration to JSON file
    saveConfig(filePath) {
      return new Promise((resolve, reject) => {
        const data = JSON.stringify(this.config, null, 2);
        const loader = new THREE.FileLoader();
        loader.load(
          filePath, 
          (jsonData) => {
            const file = new File([data], 'config.json', { type: 'application/json' });
            // Use the FileSaver.js library to save the file
            saveAs(file);
            resolve();
          },
          (progress) => {
            console.log(`Saving configuration: ${progress.loaded / progress.total * 100}%`);
          },
          (error) => {
            reject(new Error('Failed to save configuration file: ' + error.message));
          }
        );
      });
    }
  }
  
  // Expose the ConfigManager class globally
  window.ConfigManager = ConfigManager;
  
})();

// Usage example
// const configManager = new ConfigManager({});
// configManager.loadConfig('path/to/config.json').then(config => {
//   console.log('Config loaded:', config);
//   configManager.setConfigValue('exampleKey', 'exampleValue');
//   return configManager.saveConfig('path/to/newConfig.json');
// }).catch(error => {
//   console.error('An error occurred:', error);
// });