// 代码生成时间: 2025-09-24 10:04:39
 * @param {string} input - The input string to calculate the hash for
 * @returns {string} - The calculated hash value
 */
function calculateHash(input) {
  // Check if input is a string
  if (typeof input !== 'string') {
    throw new Error('Input must be a string');
  }

  // Create a new instance of the SHA-256 hash function
  const hash = new jsSHA('SHA-256', 'TEXT');
  hash.update(input);
  return hash.getHash('HEX');
}

/**
 * Handles the user input and displays the hash value
 *
 * @param {string} userInput - The user input to calculate the hash for
 */
function handleUserInput(userInput) {
  try {
    // Calculate the hash value
    const hashValue = calculateHash(userInput);

    // Display the hash value in the console
    console.log('Hash Value:', hashValue);
  } catch (error) {
    // Handle any errors that occur during hash calculation
    console.error('Error calculating hash:', error.message);
  }
}

// Usage example: Calculate and display the hash for a sample input
handleUserInput('Hello, World!');