// 代码生成时间: 2025-08-09 18:09:53
 * This script sets up an integration test environment using ThreeJS.
 * It creates a basic 3D scene and provides a structure for testing various components.
 */

const setupTestScene = () => {
  // Create a ThreeJS scene
  const scene = new THREE.Scene();
  
  // Create a perspective camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  
  // Create a renderer and set its size
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  
  // Add a cube to the scene
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  
  // Create a directional light
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(0, 1, 1).normalize();
  scene.add(light);
  
  // Handle errors and edge cases
  if (!renderer) {
    console.error('Failed to create THREE.WebGLRenderer instance.');
    return;
  }
  if (!camera) {
    console.error('Failed to create THREE.PerspectiveCamera instance.');
    return;
  }
  if (!scene) {
    console.error('Failed to create THREE.Scene instance.');
    return;
  }
  
  // Test function to check if the cube is added to the scene
  const testCubeInScene = () => {
    if (scene.getObjectByName('cube') === undefined) {
      throw new Error('Cube is not present in the scene.');
    }
    console.log('Cube is present in the scene.');
  };
  
  // Test function to check if the renderer is correctly sized
  const testRendererSize = () => {
    if (renderer.domElement.width !== window.innerWidth ||
        renderer.domElement.height !== window.innerHeight) {
      throw new Error('Renderer size does not match window size.');
    }
    console.log('Renderer size matches window size.');
  };
  
  // Test function to check if the light is correctly positioned
  const testLightPosition = () => {
    if (light.position.x !== 0 || light.position.y !== 1 || light.position.z !== 1) {
      throw new Error('Light position is incorrect.');
    }
    console.log('Light position is correct.');
  };
  
  // Public object to expose test functions
  return {
    scene,
    camera,
    renderer,
    cube,
    light,
    testCubeInScene,
    testRendererSize,
    testLightPosition
  };
};

// Run the test scene setup function
const testEnvironment = setupTestScene();

// Example usage of test functions
try {
  testEnvironment.testCubeInScene();
  testEnvironment.testRendererSize();
  testEnvironment.testLightPosition();
} catch (error) {
  console.error(error.message);
}