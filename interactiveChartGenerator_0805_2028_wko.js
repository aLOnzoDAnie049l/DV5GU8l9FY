// 代码生成时间: 2025-08-05 20:28:23
 * InteractiveChartGenerator.js
 * This program creates an interactive 3D chart generator using THREE.js.
 */

const.THREE = require('three');
const { OrbitControls } = require('three/examples/jsm/controls/OrbitControls.js');

/**
 * Initializes the 3D chart scene.
 * @param {HTMLDivElement} container - The container where the 3D chart will be rendered.
 */
function initChart(container) {
  // Scene setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0x404040); // soft white light
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(0, 1, 0).normalize();
  scene.add(directionalLight);

  // Camera position
  camera.position.set(0, 0, 100);

  // Orbit controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;

  // Handle window resize
  window.addEventListener('resize', onWindowResize, false);
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  // Add axes helper for orientation
  const axesHelper = new THREE.AxesHelper(50);
  scene.add(axesHelper);

  // Render loop
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();

  // Return the scene for further manipulation or adding of objects
  return scene;
}

/**
 * Adds a 3D line chart to the scene.
 * @param {THREE.Scene} scene - The scene where the chart will be added.
 * @param {Array} data - An array of points for the line chart.
 */
function addLineChart(scene, data) {
  if (!data || !data.length) {
    console.error('No data provided for the line chart.');
    return;
  }

  const geometry = new THREE.BufferGeometry().setFromPoints(data);
  const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
  const line = new THREE.Line(geometry, material);
  scene.add(line);
}

/**
 * Main function to create an interactive chart.
 * @param {HTMLDivElement} container - The container where the 3D chart will be rendered.
 * @param {Array} data - An array of points for the line chart.
 */
function createInteractiveChart(container, data) {
  try {
    const scene = initChart(container);
    addLineChart(scene, data);
  } catch (error) {
    console.error('Failed to create interactive chart:', error);
  }
}

// Example usage
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('chartContainer');
  if (!container) {
    console.error('Chart container not found.');
    return;
  }
  const sampleData = [
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(10, 10, 0),
    new THREE.Vector3(20, 20, 0),
    new THREE.Vector3(30, 30, 0),
  ];
  createInteractiveChart(container, sampleData);
});