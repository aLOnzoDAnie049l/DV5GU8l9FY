// 代码生成时间: 2025-08-04 14:27:42
 * This module provides basic XSS protection for strings used in a THREEJS
 * based web application. It is designed to sanitize input to prevent
 * cross-site scripting attacks.
 *
 * @module XSSProtection
 */

(function() {
  // Function to sanitize input to prevent XSS attacks
  function sanitizeInput(input) {
    // Use DOMPurify to sanitize input if available
    if (typeof DOMPurify !== 'undefined') {
      return DOMPurify.sanitize(input);
    }
    // Fallback to a simple replacement of dangerous characters if DOMPurify is not available
    return input
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\/g, '&#x5c;')
      .replace(/\/g, '&#x2f;')
      .replace(/'/g, '&#x27;')
      .replace(/"/g, '&quot;');
  }

  // Export the sanitizeInput function for use in the application
  if (typeof module !== 'undefined') {
    module.exports = {
      sanitizeInput: sanitizeInput
    };
  } else {
    // If in the browser, attach the sanitizeInput function to the window object
    window.sanitizeInput = sanitizeInput;
  }
})();
