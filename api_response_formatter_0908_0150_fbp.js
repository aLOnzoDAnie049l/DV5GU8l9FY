// 代码生成时间: 2025-09-08 01:50:43
// Import required modules
const THREE = require('three');

/**
 * Formats the API response based on the provided template.
 *
 * @param {Object} response - The raw API response object.
 * @param {Object} template - The template to format the response with.
 * @returns {Object} - The formatted response object.
 */
function formatApiResponse(response, template) {
  // Check if response and template are provided
  if (!response || !template) {
    throw new Error('Response and template are required.');
  }

  // Check if response is an object
  if (typeof response !== 'object' || Array.isArray(response)) {
    throw new Error('Response must be an object.');
  }

  // Check if template is an object
  if (typeof template !== 'object' || Array.isArray(template)) {
    throw new Error('Template must be an object.');
  }

  // Create a new object to store the formatted response
  const formattedResponse = {};

  // Iterate through the template properties
  for (const key in template) {
    // Check if the key exists in the response
    if (response.hasOwnProperty(key)) {
      // Add the property to the formatted response
      formattedResponse[key] = response[key];
    } else {
      // Handle missing properties in the response
      formattedResponse[key] = null;
    }
  }

  // Return the formatted response
  return formattedResponse;
}

// Example usage
const rawResponse = {
  id: 1,
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '123-456-7890'
};

const template = {
  id: 'User ID',
  name: 'Full Name',
  email: 'Email Address'
};

try {
  const formatted = formatApiResponse(rawResponse, template);
  console.log(formatted);
} catch (error) {
  console.error(error.message);
}
