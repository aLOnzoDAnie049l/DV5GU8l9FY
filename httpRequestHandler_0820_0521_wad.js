// 代码生成时间: 2025-08-20 05:21:59
// httpRequestHandler.js
// 该脚本使用JS和THREEJS框架创建一个HTTP请求处理器。

const express = require('express');  // 引入express框架
const app = express();
const port = 3000;  // 设置端口号
const http = require('http').Server(app);  // 创建HTTP服务器
const io = require('socket.io')(http);  // 创建socket.io实例

// 处理GET请求
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');  // 发送index.html文件
});

// 处理其他GET请求
app.get('/:url', (req, res) => {
  res.status(404).send('404: Not Found');  // 返回404错误
});

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error(err.stack);  // 输出错误堆栈信息
  res.status(500).send('Something broke!');  // 返回500错误
});

// 启动HTTP服务器
http.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// 处理WebSocket连接
io.on('connection', (socket) => {
  console.log('Client connected');  // 打印客户端连接信息

  // 处理客户端发送的消息
  socket.on('message', (msg) => {
    console.log('Received message:', msg);  // 打印接收到的消息
  });

  // 处理客户端断开连接
  socket.on('disconnect', () => {
    console.log('Client disconnected');  // 打印客户端断开连接信息
  });
});

// 导出HTTP请求处理器
module.exports = app;