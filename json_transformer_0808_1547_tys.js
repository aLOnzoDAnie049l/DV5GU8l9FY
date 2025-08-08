// 代码生成时间: 2025-08-08 15:47:59
// 引入Three.js库
const THREE = require('three');

/**
 * 主函数，用于初始化场景并运行程序
 */
function init() {
  // 创建场景
  const scene = new THREE.Scene();
  // 创建一个透视相机
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  // 创建一个渲染器并设置其大小
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // 将相机向后移动
  camera.position.z = 5;

  // 创建一个几何体
  const geometry = new THREE.BoxGeometry();
  // 创建一个材料
  const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
  // 创建一个网格
  const cube = new THREE.Mesh(geometry, material);
  // 将网格添加到场景中
  scene.add(cube);

  // 当窗口大小变化时，更新相机和渲染器的大小
  window.addEventListener('resize', onWindowResize, false);

  // 动画函数
  function animate() {
    requestAnimationFrame(animate);
    // 旋转立方体
    cube.rotation.x += 0.01;
# NOTE: 重要实现细节
    cube.rotation.y += 0.01;
    // 渲染场景
    renderer.render(scene, camera);
  }
  animate();

  /**
# NOTE: 重要实现细节
   * 窗口大小变化时的处理函数
   */
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
}

// 调用主函数
init();
# 扩展功能模块