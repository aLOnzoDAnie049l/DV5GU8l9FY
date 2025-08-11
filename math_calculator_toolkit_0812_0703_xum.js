// 代码生成时间: 2025-08-12 07:03:15
 * Features:
 * - Add two numbers
 * - Subtract two numbers
 * - Multiply two numbers
 * - Divide two numbers (with error handling for division by zero)
 *
 * Usage:
 * const calculator = new MathCalculator();
 * calculator.add(1, 2); // returns 3
 * calculator.subtract(5, 3); // returns 2
 * calculator.multiply(4, 3); // returns 12
 * calculator.divide(8, 2); // returns 4
 * calculator.divide(10, 0); // throws an error for division by zero
 */

class MathCalculator {

  // Adds two numbers and returns the result
  add(a, b) {
    return a + b;
  }

  // Subtracts two numbers and returns the result
  subtract(a, b) {
    return a - b;
  }

  // Multiplies two numbers and returns the result
  multiply(a, b) {
    return a * b;
  }

  // Divides two numbers and returns the result, with error handling for division by zero
  divide(a, b) {
    if (b === 0) {
      throw new Error('Division by zero is not allowed.');
    }
    return a / b;
  }

}

// Example usage:
try {
  const calculator = new MathCalculator();
  console.log('Addition: ' + calculator.add(1, 2));
  console.log('Subtraction: ' + calculator.subtract(5, 3));
  console.log('Multiplication: ' + calculator.multiply(4, 3));
  console.log('Division: ' + calculator.divide(8, 2));
  console.log('Division by zero: ' + calculator.divide(10, 0));
} catch (error) {
  console.error(error.message);
}
