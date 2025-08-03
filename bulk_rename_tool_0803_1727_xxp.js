// 代码生成时间: 2025-08-03 17:27:55
// bulk_rename_tool.js
// 使用JS和THREEJS框架创建的批量文件重命名工具

// 引入Node.js的文件系统模块
const fs = require('fs');
const path = require('path');

/**
 * 批量重命名指定目录下的所有文件
 * @param {string} directoryPath - 文件夹路径
 * @param {function} renameFunction - 重命名函数，接受文件名并返回新的文件名
 * @returns {Promise<void>}
 */
function bulkRename(directoryPath, renameFunction) {
  return new Promise((resolve, reject) => {
    // 读取目录下的所有文件
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        reject(`Error reading directory: ${err.message}`);
        return;
      }

      // 遍历文件并重命名
      files.forEach(file => {
        const filePath = path.join(directoryPath, file);
        fs.stat(filePath, (err, stats) => {
          if (err) {
            console.error(`Error getting file stats: ${err.message}`);
            return;
          }

          if (stats.isFile()) {
            const newName = renameFunction(file);
            const newFilePath = path.join(directoryPath, newName);
            fs.rename(filePath, newFilePath, err => {
              if (err) {
                console.error(`Error renaming file: ${err.message}`);
              }
            });
          }
        });
      });

      // 所有文件处理完毕后解决Promise
      resolve();
    });
  });
}

/**
 * 示例重命名函数：在文件名后添加前缀
 * @param {string} fileName - 原始文件名
 * @returns {string} - 新的文件名
 */
function addPrefixToFilename(fileName) {
  return `prefix_${fileName}`;
}

// 使用示例
const directoryPath = './example_directory'; // 指定要重命名文件的目录
bulkRename(directoryPath, addPrefixToFilename)
  .then(() => console.log('All files have been renamed successfully.'))
  .catch(err => console.error('Error during file renaming:', err));
