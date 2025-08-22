// 代码生成时间: 2025-08-22 13:34:47
const THREE = require('three');
const { OrbitControls } = require('three/examples/jsm/controls/OrbitControls');

// Function to create the Excel table
function createExcelTable() {
  // Initialize the scene, camera, and renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Set up the camera position
  camera.position.z = 5;

  // Set up the orbit controls
  const controls = new OrbitControls(camera, renderer.domElement);

  // Create table geometry
  const tableGeometry = new THREE.PlaneGeometry(4, 4);
  const tableMaterial = new THREE.MeshBasicMaterial({ color: 0x888888, wireframe: true });
  const table = new THREE.Mesh(tableGeometry, tableMaterial);
  scene.add(table);

  // Create grid geometry and material
  const gridGeometry = new THREE.PlaneGeometry(4, 4);
  const gridMaterial = new THREE.MeshBasicMaterial({ color: 0x333333, wireframe: true });
  const grid = new THREE.Mesh(gridGeometry, gridMaterial);
  scene.add(grid);

  // Create a function to animate the table
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }

  animate();
}

// Call the createExcelTable function to initialize the Excel table
createExcelTable();