// 代码生成时间: 2025-09-05 16:59:44
class JsonConverter {

  /**
   * Converts the input JSON data to a more readable format.
   * @param {string} jsonData - The JSON data to be converted.
   * @returns {string} The formatted JSON string.
   */
  static convertJson(jsonData) {
    try {
      // Parse the JSON data
      let parsedData = JSON.parse(jsonData);

      // Convert the parsed object to a string with indentation for better readability
      let formattedJson = JSON.stringify(parsedData, null, 2);
      return formattedJson;
    } catch (error) {
      // Handle any errors during JSON parsing
      console.error('Error parsing JSON:', error.message);
      throw new Error('Invalid JSON data provided.');
    }
  }
}

// Example usage:
const jsonData = '{"name":"John", "age":30, "city":"New York"}';
const formattedJson = JsonConverter.convertJson(jsonData);
console.log('Formatted JSON:', formattedJson);
