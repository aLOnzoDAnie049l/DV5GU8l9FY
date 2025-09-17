// 代码生成时间: 2025-09-18 03:57:39
// Import necessary modules from THREE.JS
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Function to initialize the scene, camera, and renderer
function init() {
  // Create the scene
  const scene = new THREE.Scene();

  // Create the camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  // Create the renderer and add it to the dom
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Add orbit controls
  const controls = new OrbitControls(camera, renderer.domElement);

  // Create a geometry and material for the model
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const model = new THREE.Mesh(geometry, material);
  scene.add(model);

  // Set the camera position
  camera.position.z = 5;

  // Render the scene
  function animate() {
    requestAnimationFrame(animate);

    // Rotate the model for animation
    model.rotation.x += 0.01;
    model.rotation.y += 0.01;

    // Render the scene with the camera
    renderer.render(scene, camera);
  }

  animate();
}

// Handle window resize
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// Event listener for window resize
window.addEventListener('resize', onWindowResize, false);

// Initialize the model viewer when the script is loaded
init();