// 代码生成时间: 2025-08-07 07:30:51
const express = require('express');
const { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh } = require('three');

// 创建一个 Express 应用
const app = express();
const port = 3000;

// 创建一个 Three.js 场景
const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new WebGLRenderer();
const geometry = new BoxGeometry();
const material = new MeshBasicMaterial({ color: 0x00ff00 });
const cube = new Mesh(geometry, material);

scene.add(cube);
camera.position.z = 5;

// 设置路由和处理函数
app.get('/api/cube', (req, res) => {
  // 简单的错误处理
  if (!req.query.color) {
    res.status(400).send('Color parameter is required');
    return;
  }

  // 更新颜色
  cube.material.color.set(req.query.color);

  // 渲染场景
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);

  // 发送渲染结果
  res.send('Cube color updated to ' + req.query.color);
});

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// 以下是 HTML 部分，用于在浏览器中显示渲染的立方体
document.body.innerHTML = `<canvas id='threeCanvas'></canvas>`;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 动画循环
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();