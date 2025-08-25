// 代码生成时间: 2025-08-26 06:58:56
const ExcelJS = require('exceljs');

/**
 * Excel表格自动生成器
 * @class ExcelGenerator
 */
class ExcelGenerator {
  constructor() {
    // 初始化Excel工作簿
    this.workbook = new ExcelJS.Workbook();
    this.workbook.creator = 'ExcelGenerator';
    this.worksheet = this.workbook.addWorksheet('Sheet1');
  }

  /**
   * 添加行到工作表
   * @param {Array} data - 行数据
   */
  addRow(data) {
    if (!Array.isArray(data)) {
      throw new Error('Data must be an array.');
    }
    this.worksheet.addRow(data);
  }

  /**
   * 保存工作簿到文件
   * @param {String} filename - 文件名
   */
  saveWorkbook(filename) {
    if (!filename) {
      throw new Error('Filename must be provided.');
    }
    this.workbook.xlsx.writeFile(filename)
      .then(() => {
        console.log(`Workbook saved as ${filename}`);
      })
      .catch((err) => {
        console.error('Error saving workbook:', err);
      }).catch((err) => {
        console.error('Error saving workbook:', err);
      });
  }
}

/**
 * 示例用法
 */
(function usage() {
  try {
    const generator = new ExcelGenerator();
    // 添加一些行数据
    generator.addRow(['Column A', 'Column B', 'Column C']);
    generator.addRow([1, 2, 3]);
    generator.addRow([4, 5, 6]);
    // 保存工作簿
    generator.saveWorkbook('example.xlsx');
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
})();