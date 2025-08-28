// 代码生成时间: 2025-08-28 10:39:49
// 导入必要的库
const mysql = require('mysql');

// 定义数据库连接池配置
const poolConfig = {
  connectionLimit: 10, // 连接池中的最大连接数
  host: 'localhost', // 数据库主机地址
  user: 'root', // 数据库用户名
  password: 'password', // 数据库密码
  database: 'test_db' // 数据库名称
};

// 创建数据库连接池
const pool = mysql.createPool(poolConfig);

// 获取数据库连接
function getConnection(callback) {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('获取数据库连接失败:', err);
      callback(err, null);
    } else {
      console.log('成功获取数据库连接');
      callback(null, connection);
    }
  });
}

// 释放数据库连接
function releaseConnection(connection) {
  connection.release();
  console.log('数据库连接已释放');
}

// 执行SQL查询
function executeQuery(sql, params, callback) {
  getConnection((err, connection) => {
    if (err) {
      callback(err, null);
      return;
    }

    connection.query(sql, params, (err, results) => {
      releaseConnection(connection);

      if (err) {
        console.error('执行SQL查询失败:', err);
        callback(err, null);
      } else {
        console.log('SQL查询成功', results);
        callback(null, results);
      }
    });
  });
}

// 示例：查询用户信息
function queryUserInfo(userId, callback) {
  const sql = 'SELECT * FROM users WHERE id = ?';
  const params = [userId];

  executeQuery(sql, params, (err, results) => {
    if (err) {
      console.error('查询用户信息失败:', err);
      callback(err, null);
    } else {
      console.log('查询用户信息成功:', results);
      callback(null, results);
    }
  });
}

// 启动程序
queryUserInfo(1, (err, results) => {
  if (err) {
    console.error('程序启动失败:', err);
  } else {
    console.log('程序启动成功，用户信息:', results);
  }
});