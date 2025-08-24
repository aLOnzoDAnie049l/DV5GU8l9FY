// 代码生成时间: 2025-08-24 09:01:39
// Import necessary THREE.js modules
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Define the global variables
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
const controls = new OrbitControls(camera, renderer.domElement);

// Function to create the bar geometry
function createBarGeometry(width, height, depth) {
    const geometry = new THREE.BoxGeometry(width, height, depth);
    return geometry;
}

// Function to create a bar material
function createBarMaterial(color) {
    const material = new THREE.MeshPhongMaterial({ color: color });
    return material;
}

// Function to create a bar mesh
function createBarMesh(geometry, material) {
    const mesh = new THREE.Mesh(geometry, material);
    return mesh;
}

// Function to add a bar to the scene
function addBarToScene(scene, mesh, x, y, z) {
    mesh.position.set(x, y, z);
    scene.add(mesh);
}

// Function to generate random data for demonstration purposes
function generateRandomData(count) {
    const data = [];
    for (let i = 0; i < count; i++) {
        data.push(Math.floor(Math.random() * 100));
    }
    return data;
}

// Function to create bars based on data and add them to the scene
function createBars(data) {
    const geometry = createBarGeometry(1, 1, 1);
    const material = createBarMaterial(0x00ff00); // Green color for bars

    for (let i = 0; i < data.length; i++) {
        const mesh = createBarMesh(geometry, material);
        addBarToScene(scene, mesh, i * 2, data[i], 0); // Position bars along the x-axis
    }
}

// Set up the renderer
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Set up the camera
camera.position.z = 5;

// Set up the controls
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

// Create and add bars to the scene
const data = generateRandomData(10); // Generate 10 random data points for demonstration
createBars(data);

// Render the scene
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

animate();