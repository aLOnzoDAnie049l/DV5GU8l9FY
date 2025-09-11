// 代码生成时间: 2025-09-11 08:54:51
// 引入必要的库
const THREE = require('three');
const { OrbitControls } = require('three/examples/jsm/controls/OrbitControls.js');
const { ExcelJS } = require('exceljs');

// 初始化Excel工作簿
const workbook = new ExcelJS.Workbook();

// 创建一个新的工作表
const worksheet = workbook.addWorksheet('My Sheet');

// 定义生成Excel表格的函数
function generateExcelTable(data, columnTitles) {
  // 添加标题行
  worksheet.addRow(columnTitles);
  
  // 添加数据行
  data.forEach(rowData => {
    worksheet.addRow(rowData);
  });
  
  // 设置单元格样式
  worksheet.columns = [
    { header: 'ID', key: 'id', width: 10 },
    { header: 'Name', key: 'name', width: 32 },
    { header: 'Age', key: 'age', width: 10 },
    { header: 'Email', key: 'email', width: 32 }
  ];
  
  // 添加边框样式
  worksheet.getRow(1).font = { bold: true };
  worksheet.getRow(1).fill = { patternType: 'solid', fgColor: { rgb: '000000' } };
  worksheet.columns.forEach(column => {
    column.font = { bold: true };
  });
  
  // 保存Excel文件
  workbook.xlsx.writeFile('myExcel.xlsx')
    .then(() => {
      console.log('Excel file is created successfully.');
    })
    .catch(error => {
      console.error('Error creating Excel file:', error);
    });
}

// 示例数据
const data = [
  { id: 1, name: 'John Doe', age: 30, email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Doe', age: 25, email: 'jane.doe@example.com' },
  { id: 3, name: 'Bob Smith', age: 40, email: 'bob.smith@example.com' }
];

// 列标题
const columnTitles = ['ID', 'Name', 'Age', 'Email'];

// 生成Excel表格
generateExcelTable(data, columnTitles);