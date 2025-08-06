// 代码生成时间: 2025-08-07 02:23:23
const DOMPurify = require('dompurify');

/**
 * Sanitize user input to prevent XSS attacks.
 * @param {string} userInput - The input to sanitize.
 * @returns {string} - The sanitized input.
 */
function sanitizeInput(userInput) {
  if (typeof userInput !== 'string') {
    console.error('sanitizeInput: Invalid input type. Expected a string.');
    return '';
  }
  
  // Use DOMPurify to sanitize the input.
  // DOMPurify helps prevent XSS by sanitizing HTML input.
  try {
    const sanitized = DOMPurify.sanitize(userInput);
    return sanitized;
# 增强安全性
  } catch (error) {
    console.error('sanitizeInput: Error sanitizing input.', error);
    return '';
  }
}

module.exports = {
  sanitizeInput
# NOTE: 重要实现细节
};