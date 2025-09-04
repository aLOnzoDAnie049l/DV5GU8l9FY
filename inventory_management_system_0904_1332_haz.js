// 代码生成时间: 2025-09-04 13:32:21
// Import necessary libraries
const THREE = require('three');
const { OrbitControls } = require('three/examples/jsm/controls/OrbitControls');

// InventoryItem class to represent each item in inventory
class InventoryItem {
  constructor(id, name, quantity) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
  }

  // Method to update item quantity
  updateQuantity(newQuantity) {
    if (newQuantity < 0) {
      throw new Error('Quantity cannot be negative.');
    }
    this.quantity = newQuantity;
  }
}

// InventoryManager class to manage all inventory items
class InventoryManager {
  constructor() {
    this.items = [];
    this.nextId = 1;
  }

  // Method to add a new item to the inventory
  addItem(name, quantity) {
    if (quantity < 0) {
      throw new Error('Quantity cannot be negative.');
    }
    const item = new InventoryItem(this.nextId++, name, quantity);
    this.items.push(item);
    return item;
  }

  // Method to remove an item from the inventory by id
  removeItem(itemId) {
    const index = this.items.findIndex(item => item.id === itemId);
    if (index === -1) {
      throw new Error('Item not found.');
    }
    this.items.splice(index, 1);
  }

  // Method to update an existing item in the inventory
  updateItem(itemId, newName, newQuantity) {
    const item = this.items.find(item => item.id === itemId);
    if (!item) {
      throw new Error('Item not found.');
    }
    item.name = newName;
    item.updateQuantity(newQuantity);
  }

  // Method to get all items in the inventory
  getAllItems() {
    return this.items;
  }

  // Method to find an item by id
  getItemById(itemId) {
    const item = this.items.find(item => item.id === itemId);
    if (!item) {
      throw new Error('Item not found.');
    }
    return item;
  }
}

// 3D Visualization using THREEJS
function create3DScene() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);

  // Add lighting to the scene
  const ambientLight = new THREE.AmbientLight(0x404040); // soft white light
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(1, 1, 1).normalize();
  scene.add(directionalLight);

  // Add a cube to the scene as a placeholder for inventory items
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  camera.position.z = 5;

  // Render the scene
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();
}

// Initialize the 3D scene
create3DScene();

// Create an instance of InventoryManager
const inventoryManager = new InventoryManager();

// Example usage
try {
  const item1 = inventoryManager.addItem('Apple', 10);
  console.log(`Added item: ${item1.name} with quantity ${item1.quantity}`);
  inventoryManager.updateItem(item1.id, 'Green Apple', 15);
  console.log(`Updated item: ${item1.name} with quantity ${item1.quantity}`);
  const allItems = inventoryManager.getAllItems();
  console.log('All items:', allItems);
} catch (error) {
  console.error(error.message);
}
