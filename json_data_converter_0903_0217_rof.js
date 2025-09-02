// 代码生成时间: 2025-09-03 02:17:35
// 引入THREEJS
const THREE = require('three');

/**
 * 转换JSON数据格式
 * @param {Object} jsonData - 需要转换的JSON数据
 * @param {Object} schema - 转换的规则
 * @returns {Object} 转换后的JSON数据
 */
function convertJsonData(jsonData, schema) {
  // 检查jsonData是否为对象
  if (typeof jsonData !== 'object' || jsonData === null) {
    throw new Error('jsonData must be an object');
  }

  // 检查schema是否为对象
  if (typeof schema !== 'object' || schema === null) {
    throw new Error('schema must be an object');
  }

  // 初始化转换后的JSON数据
  let convertedData = {};

  // 遍历schema中的规则
  for (const key in schema) {
    // 获取转换规则
    const rule = schema[key];

    // 检查jsonData中是否存在对应的键
    if (jsonData.hasOwnProperty(key)) {
      // 根据转换规则处理数据
      if (rule.type === 'number') {
        convertedData[key] = Number(jsonData[key]);
      } else if (rule.type === 'string') {
        convertedData[key] = String(jsonData[key]);
      } else if (rule.type === 'boolean') {
        convertedData[key] = Boolean(jsonData[key]);
      } else if (rule.type === 'array') {
        convertedData[key] = Array.isArray(jsonData[key]) ? jsonData[key] : [];
      } else if (rule.type === 'object') {
        convertedData[key] = typeof jsonData[key] === 'object' ? jsonData[key] : {};
      } else if (rule.type === 'date') {
        convertedData[key] = new Date(jsonData[key]).toISOString();
      } else {
        throw new Error(`Unsupported type: ${rule.type}`);
      }
    } else {
      // 如果jsonData中不存在对应的键，则使用默认值
      if ('default' in rule) {
        convertedData[key] = rule.default;
      } else {
        throw new Error(`Missing key: ${key}`);
      }
    }
  }

  return convertedData;
}

// 使用示例
const jsonData = {
  number: '123',
  string: 456,
  boolean: 'true',
  array: '789',
  object: '10/11/2024',
  missingKey: undefined
};

const schema = {
  number: { type: 'number' },
  string: { type: 'string' },
  boolean: { type: 'boolean', default: false },
  array: { type: 'array', default: [] },
  object: { type: 'object', default: {} },
  missingKey: { type: 'string', default: 'default value' }
};

try {
  const convertedData = convertJsonData(jsonData, schema);
  console.log(convertedData);
} catch (error) {
  console.error(error.message);
}