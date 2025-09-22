// 代码生成时间: 2025-09-23 03:47:32
class ThemeSwitcher {
  constructor(scene, renderer) {
    // Initialize scene and renderer from ThreeJS
    this.scene = scene;
    this.renderer = renderer;
    this.currentTheme = ''; // Current theme identifier
    this.themes = {
      'light': {
        backgroundColor: 0xffffff, // white
        ambientLightColor: 0xffffff, // white ambient light
        directionalLightColor: 0xffffff // white directional light
      },
      'dark': {
        backgroundColor: 0x333333, // dark gray
        ambientLightColor: 0x1c1c1c, // dark gray ambient light
        directionalLightColor: 0x1c1c1c // dark gray directional light
      }
    };
  }

  // Method to switch themes
  switchTheme(themeName) {
    if (!this.themes.hasOwnProperty(themeName)) {
      console.error(`Theme '${themeName}' not found.`);
      return;
    }

    // Set the current theme and apply changes
    this.currentTheme = themeName;
    this.applyThemeSettings();
  }

  // Method to apply theme settings
  applyThemeSettings() {
    const theme = this.themes[this.currentTheme];
    if (!theme) return; // Theme not found, should not happen due to previous checks

    // Set the renderer background color
    this.renderer.setClearColor(theme.backgroundColor);

    // Update ambient light color if present in the scene
    if (this.scene.getObjectByName('ambientLight')) {
      const ambientLight = this.scene.getObjectByName('ambientLight');
      ambientLight.color.setHex(theme.ambientLightColor);
    }

    // Update directional light color if present in the scene
    if (this.scene.getObjectByName('directionalLight')) {
      const directionalLight = this.scene.getObjectByName('directionalLight');
      directionalLight.color.setHex(theme.directionalLightColor);
    }
  }
}

// Example usage:

// Assuming we have a ThreeJS scene and renderer instance
// const scene = new THREE.Scene();
// const renderer = new THREE.WebGLRenderer();

// const themeSwitcher = new ThemeSwitcher(scene, renderer);
// themeSwitcher.switchTheme('light'); // Switch to light theme
// themeSwitcher.switchTheme('dark'); // Switch to dark theme
