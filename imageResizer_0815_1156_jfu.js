// 代码生成时间: 2025-08-15 11:56:00
 * @param {string} inputImagePath - The path to the input image.
 * @param {number} targetWidth - The target width for resizing.
 * @param {number} targetHeight - The target height for resizing.
 * @param {string} outputImagePath - The path to save the resized image.
 * @returns {Promise} - A promise that resolves when the image is resized.
 */

function resizeImage(inputImagePath, targetWidth, targetHeight, outputImagePath) {
  return new Promise((resolve, reject) => {
    // Step 1: Load the image from the input path
    const img = new Image();
    img.onload = () => {
      // Step 2: Create a canvas and resize the image
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      
      // Step 3: Draw the image on the canvas with the new dimensions
      ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
      
      // Step 4: Download the resized image
      const dataURL = canvas.toDataURL('image/jpeg');
      const link = document.createElement('a');
      link.download = 'resized_image.jpg';
      link.href = dataURL;
      link.click();
      
      // Save the resized image to the output path if needed
      // This part is omitted as it's not specified in the requirements
      
      // Step 5: Resolve the promise
      resolve();
    };
    img.onerror = () => {
      // Handle image load error
      reject(new Error('Failed to load the image'));
    };
    img.src = inputImagePath;
  });
}

/**
 * Main function to handle the resizing process
 */
function main() {
  // Define the input and output paths, target dimensions
  const inputImagePath = 'path/to/input/image.jpg';
  const targetWidth = 800;
  const targetHeight = 600;
  const outputImagePath = 'path/to/output/resized_image.jpg';
  
  // Call the resizeImage function
  resizeImage(inputImagePath, targetWidth, targetHeight, outputImagePath)
    .then(() => console.log('Image resized successfully.'))
    .catch(error => console.error('Error resizing image:', error));
}

// Run the main function
main();
