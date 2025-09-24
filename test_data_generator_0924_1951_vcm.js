// 代码生成时间: 2025-09-24 19:51:04
const THREE = require('three');

/**
 * Generate a random number between min and max
 *
 * @param {number} min - The minimum value
 * @param {number} max - The maximum value
 * @returns {number} - A random number between min and max
 */
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * Generate a random color
 *
 * @returns {THREE.Color} - A random color
 */
function getRandomColor() {
  const color = new THREE.Color();
  color.setHSL(getRandomNumber(0, 1), getRandomNumber(0.5, 1), getRandomNumber(0.5, 1));
  return color;
}

/**
 * Generate a random position within a given range
 *
 * @param {number} minX - The minimum x value
 * @param {number} maxX - The maximum x value
 * @param {number} minY - The minimum y value
 * @param {number} maxY - The maximum y value
 * @param {number} minZ - The minimum z value
 * @param {number} maxZ - The maximum z value
 * @returns {THREE.Vector3} - A random position
 */
function getRandomPosition(minX, maxX, minY, maxY, minZ, maxZ) {
  return new THREE.Vector3(
    getRandomNumber(minX, maxX),
    getRandomNumber(minY, maxY),
    getRandomNumber(minZ, maxZ)
  );
}

/**
 * Generate a random object with position and color
 *
 * @param {number} minX - The minimum x value for position
 * @param {number} maxX - The maximum x value for position
 * @param {number} minY - The minimum y value for position
 * @param {number} maxY - The maximum y value for position
 * @param {number} minZ - The minimum z value for position
 * @param {number} maxZ - The maximum z value for position
 * @returns {object} - An object with position and color
 */
function generateRandomObject(minX, maxX, minY, maxY, minZ, maxZ) {
  try {
    const position = getRandomPosition(minX, maxX, minY, maxY, minZ, maxZ);
    const color = getRandomColor();
    return { position, color };
  } catch (error) {
    console.error('Error generating random object:', error);
    throw error;
  }
}

/**
 * Main function to demonstrate the test data generator
 */
function main() {
  const testObject = generateRandomObject(-10, 10, -10, 10, -10, 10);
  console.log('Generated Test Object:', testObject);
}

// Run the main function to demonstrate the test data generator
main();