// 代码生成时间: 2025-08-18 15:37:37
(function() {
  // Ensure THREE.js is loaded
  if (typeof THREE === 'undefined') {
    console.error('THREE.js is not defined. Please include it before this script.');
    return;
  }

  // Create a scene
  const scene = new THREE.Scene();

  // Create a camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  // Create a WebGL renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Create a resize listener to handle responsiveness
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener('resize', onWindowResize, false);

  // Handle window resize on initial load
  onWindowResize();

  // Main animation loop
  function animate() {
    requestAnimationFrame(animate);
    // Render the scene
    renderer.render(scene, camera);
  }
  animate();

})();