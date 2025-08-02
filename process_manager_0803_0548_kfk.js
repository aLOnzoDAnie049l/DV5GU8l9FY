// 代码生成时间: 2025-08-03 05:48:50
// Import necessary THREE.js components
const { WebGLRenderer, Scene, PerspectiveCamera, Vector3, BoxGeometry, MeshBasicMaterial, Mesh } = require('three');

// Define the ProcessManager class
class ProcessManager {
  constructor(containerId) {
    this.container = document.getElementById(containerId); // Get the container element
    this.scene = new Scene(); // Create a new scene
    this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // Set up the camera
    this.renderer = new WebGLRenderer(); // Set up the renderer
    this.renderer.setSize(window.innerWidth, window.innerHeight); // Set the renderer size
    this.container.appendChild(this.renderer.domElement); // Append the renderer to the container

    // Initialize the process objects
    this._processes = [];
  }

  // Add a process to the scene
  addProcess(name) {
    try {
      // Create a new process box
      const geometry = new BoxGeometry(1, 1, 1);
      const material = new MeshBasicMaterial({ color: 0x00ff00 }); // Green color for processes
      const processBox = new Mesh(geometry, material);
      processBox.name = name;
      this.scene.add(processBox); // Add the process box to the scene
      this._processes.push(processBox); // Store the process box reference

      // Handle window resize
      window.addEventListener('resize', this.onWindowResize, false);
    } catch (error) {
      console.error('Error adding process:', error);
    }
  }

  // Remove a process from the scene
  removeProcess(name) {
    try {
      // Find the process box and remove it from the scene
      const processBox = this._processes.find(process => process.name === name);
      if (processBox) {
        this.scene.remove(processBox);
        this._processes = this._processes.filter(process => process.name !== name);
      } else {
        console.warn(`Process with name '${name}' not found`);
      }
    } catch (error) {
      console.error('Error removing process:', error);
    }
  }

  // Handle window resize
  onWindowResize = () => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  // Render the scene
  render() {
    this.renderer.render(this.scene, this.camera);
  }
}

// Example usage
const processManager = new ProcessManager('processContainer');

// Add processes
processManager.addProcess('Process 1');
processManager.addProcess('Process 2');

// Render the scene
processManager.render();