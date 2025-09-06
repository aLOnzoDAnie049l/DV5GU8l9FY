// 代码生成时间: 2025-09-07 04:10:51
 * This module provides functionality to format API responses into a structured and
 * readable form, improving readability and debugging experience.
 */

/**
 * Formats an API response into a structured format.
 * @param {Object} response - The raw API response object.
 * @returns {Object} A formatted API response object.
 */
function formatApiResponse(response) {
  // Check if the response is valid
  if (!response || typeof response !== 'object') {
    throw new Error('Invalid API response provided.');
  }

  // Check if the response has the necessary structure
  if (!response.status || !response.data) {
    throw new Error('API response must contain status and data properties.');
  }

  // Format the response into a structured object
  const formattedResponse = {
    status: response.status,
    message: response.message || 'No message provided.',
    data: response.data ? formatData(response.data) : null,
    errors: response.errors ? formatErrors(response.errors) : null
  };

  return formattedResponse;
}

/**
 * Formats the data part of the API response.
 * @param {Object} data - The data part of the API response.
 * @returns {Object} A formatted data object.
 */
function formatData(data) {
  // You can add more specific formatting logic here based on your application's needs
  return data;
}

/**
 * Formats the errors part of the API response.
 * @param {Array} errors - The errors part of the API response.
 * @returns {Array} A formatted errors array.
 */

function formatErrors(errors) {
  // You can add more specific formatting logic here based on your application's needs
  return errors.map(error => ({
    code: error.code,
    message: error.message
  }));
}

// Example usage
try {
  const rawResponse = {
    status: 'success',
    message: 'Data retrieved successfully.',
    data: {
      id: 1,
      name: 'John Doe'
    },
    errors: null
  };

  const formattedResponse = formatApiResponse(rawResponse);
  console.log(formattedResponse);
} catch (error) {
  console.error('Error formatting API response:', error.message);
}