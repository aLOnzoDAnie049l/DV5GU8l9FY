// 代码生成时间: 2025-09-16 21:48:49
// testDataGenerator.js
// This script generates test data using JS and THREEJS framework.

/**
 * Generates a random 3D vector within a given range.
 * @param {number} min - The minimum value for each component.
 * @param {number} max - The maximum value for each component.
 * @returns {THREE.Vector3} - A random 3D vector.
 */
function generateRandomVector(min, max) {
  return new THREE.Vector3(
    Math.random() * (max - min) + min,
    Math.random() * (max - min) + min,
    Math.random() * (max - min) + min
  );
}

/**
 * Generates an array of random 3D vectors.
 * @param {number} count - The number of vectors to generate.
 * @param {number} min - The minimum value for each component.
 * @param {number} max - The maximum value for each component.
 * @returns {THREE.Vector3[]} - An array of random 3D vectors.
 */
function generateVectorArray(count, min, max) {
  if (count <= 0) {
    throw new Error('Count must be greater than 0.');
  }
  const vectors = [];
  for (let i = 0; i < count; i++) {
    vectors.push(generateRandomVector(min, max));
  }
  return vectors;
}

/**
 * The main function that generates test data and logs it to the console.
 * @param {number} count - The number of test data points to generate.
 * @param {number} min - The minimum value for each component.
 * @param {number} max - The maximum value for each component.
 */
function generateTestData(count, min, max) {
  try {
    const testData = generateVectorArray(count, min, max);
    console.log('Generated Test Data:', testData);
  } catch (error) {
    console.error('Error generating test data:', error.message);
  }
}

// Example usage:
// Generate 10 random 3D vectors with components ranging from -10 to 10.
generateTestData(10, -10, 10);
