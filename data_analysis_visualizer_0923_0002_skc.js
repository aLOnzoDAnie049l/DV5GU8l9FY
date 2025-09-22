// 代码生成时间: 2025-09-23 00:02:02
// Data Analysis Visualizer using JS and THREEJS
// Description: This script creates a 3D scatter plot using THREEJS based on provided data points.

const THREE = require('three');
const { OrbitControls } = require('three/examples/jsm/controls/OrbitControls');

/**
 * Creates a 3D scatter plot using THREEJS
 * @param {Array<Array<number>>} data - 2D array of data points [x, y, z]
 * @param {string} containerId - The ID of the HTML element to append the renderer to
 */
function createScatterPlot(data, containerId) {
  // Error handling for invalid input
  if (!Array.isArray(data) || !data.length || typeof containerId !== 'string') {
    console.error('Invalid input provided to createScatterPlot');
    return;
  }

  // Initialize scene, camera, and renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById(containerId).appendChild(renderer.domElement);

  // Set up camera position
  camera.position.z = 5;

  // Set up orbit controls
  const controls = new OrbitControls(camera, renderer.domElement);

  // Add a grid to the scene
  const grid = new THREE.GridHelper(10, 10, 0x888888, 0x444444);
  scene.add(grid);

  // Create geometry and material for the scatter plot
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(data.flat());
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const material = new THREE.PointsMaterial({ color: 0x888888, size: 0.05 });
  const points = new THREE.Points(geometry, material);
  scene.add(points);

  // Render loop
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }

  animate();
}

// Example usage:
// Provide sample data as a 2D array of [x, y, z] points
const sampleData = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  // ... more data points
];

// Call the function with the sample data and the container ID
createScatterPlot(sampleData, 'visualizationContainer');