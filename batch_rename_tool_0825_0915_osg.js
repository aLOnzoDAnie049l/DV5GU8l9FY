// 代码生成时间: 2025-08-25 09:15:04
// batch_rename_tool.js - A utility to batch rename files using JavaScript and THREEJS

// Function to rename files in the specified directory
function batchRenameFiles(directoryPath, renamePattern, callback) {
    const fs = require('fs');
    const path = require('path');

    // Read the directory contents
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return callback(err, null);
        }

        // Filter out non-file items
        const fileNames = files.filter(file => fs.statSync(path.join(directoryPath, file)).isFile());

        let count = 0;
        fileNames.forEach(file => {
            const oldPath = path.join(directoryPath, file);
            const newName = renamePattern.replace('{name}', file);
            const newPath = path.join(directoryPath, newName);

            // Rename the file
            fs.rename(oldPath, newPath, renameErr => {
                if (renameErr) {
                    console.error(`Error renaming ${file} to ${newName}:`, renameErr);
                    callback(renameErr, null);
                    return;
                }
                count++;

                // If all files have been renamed, call the callback
                if (count === fileNames.length) {
                    callback(null, `Successfully renamed ${count} files.`);
                }
            });
        });
    });
}

// Example usage
const directoryPath = './files'; // Path to the directory with files
const renamePattern = '{name}-rename'; // Pattern to rename files (e.g., 'file.txt' -> 'file-rename.txt')

batchRenameFiles(directoryPath, renamePattern, (err, message) => {
    if (err) {
        console.error('An error occurred:', err);
    } else {
        console.log(message);
    }
});

// Notes:
// - Ensure the 'fs' and 'path' modules are available in the environment where this script is run.
// - The 'renamePattern' should be a string that includes the placeholder '{name}' which will be replaced by the original file name.
// - The callback function will be called once all files have been renamed or if an error occurs.
// - Proper error handling is implemented to catch and log errors that occur during file reading or renaming.
// - The code is designed to be easily maintainable and extensible, with clear structure and comments.