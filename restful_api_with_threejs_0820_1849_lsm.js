// 代码生成时间: 2025-08-20 18:49:35
 * Provides a RESTful API interface for a THREEJS application.
 */

const express = require('express');
const THREE = require('three');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to serve static files, e.g., HTML, CSS, JS
app.use(express.static('public'));

// Create a scene for THREEJS
const scene = new THREE.Scene();

// Initialize a camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Initialize a renderer and add it to the DOM
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Function to handle GET requests for scene data
app.get('/scene', (req, res) => {
  // Mock data response
  res.json({
    type: 'Scene',
    width: window.innerWidth,
    height: window.innerHeight,
    cameraPosition: camera.position.toArray()
  });
});

// Function to handle POST requests to update scene
app.post('/scene', (req, res) => {
  try {
    // Update scene based on the request data
    // This is a placeholder for actual scene update logic
    // For example, adding objects to the scene based on the request data
    //scene.update(req.body);
    
    // Respond with success message
    res.status(200).send('Scene updated successfully.');
  } catch (error) {
    // Error handling
    console.error('Error updating the scene:', error);
    res.status(500).send('Internal server error.');
  }
});

// Error handling middleware
app.use((req, res, next) => {
  res.status(404).send('Route not found.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Render the scene on each frame
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();

// Function to handle window resizing
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
