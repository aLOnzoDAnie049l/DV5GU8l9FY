// 代码生成时间: 2025-08-29 21:18:13
// testDataGenerator.js

// 引入THREE.js
import * as THREE from 'three';

/**
 * 生成测试数据，用于3D场景
 * @class TestDataGenerator
 */
class TestDataGenerator {

  constructor() {
    // 初始化生成器
  }

  /**
   * 生成随机颜色
   * @returns {THREE.Color} 返回随机颜色
   */
  generateRandomColor() {
    const color = new THREE.Color();
    color.setHSL(Math.random(), 0.5, 0.5);
    return color;
  }

  /**
   * 生成随机位置
   * @returns {THREE.Vector3} 返回随机位置
   */
  generateRandomPosition() {
    const position = new THREE.Vector3();
    position.x = Math.random() * 100 - 50;
    position.y = Math.random() * 100 - 50;
    position.z = Math.random() * 100 - 50;
    return position;
  }

  /**
   * 生成随机大小
   * @returns {number} 返回随机大小
   */
  generateRandomSize() {
    return Math.random() * 10 + 1; // 1到11之间的随机数
  }

  /**
   * 创建测试数据对象
   * @returns {object} 返回测试数据对象
   */
  createTestData() {
    try {
      // 生成随机颜色、位置和大小
      const color = this.generateRandomColor();
      const position = this.generateRandomPosition();
      const size = this.generateRandomSize();

      // 创建测试数据对象
      const testData = {
        color,
        position,
        size
      };

      return testData;
    } catch (error) {
      console.error('Error creating test data:', error);
      throw error;
    }
  }
}

// 示例用法
const testDataGenerator = new TestDataGenerator();
const testData = testDataGenerator.createTestData();
console.log(testData);