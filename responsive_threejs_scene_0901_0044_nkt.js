// 代码生成时间: 2025-09-01 00:44:43
// Import the core of Three.js
import * as THREE from 'three';

// Initialize the scene, camera and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add lights to the scene
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 1, 0);
scene.add(directionalLight);

// Handle window resize to make the scene responsive
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize, false);

// Function to create a mesh with a given geometry and material
function createMesh(geometry, material) {
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    return mesh;
}

// Example: Create a simple sphere in the scene
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});
createMesh(geometry, material);

// Animation loop to render the scene
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();