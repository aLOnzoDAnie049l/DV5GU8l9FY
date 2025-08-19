// 代码生成时间: 2025-08-19 14:49:02
const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');

// Function to read all CSV files in a directory
function readCSVFiles(directoryPath) {
  return fs.readdirSync(directoryPath)
    .filter(file => file.endsWith('.csv'))
    .map(file => path.join(directoryPath, file));
}

// Function to process a single CSV file
function processCSVFile(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const csvData = Papa.parse(fileContent, {
      header: true,
      skipEmptyLines: true,
    });
    // Process the CSV data here
    // For now, just log the data to the console
    console.log(`Processed ${filePath}:`, csvData.data);
  } catch (error) {
    console.error(`Error processing file ${filePath}: ${error.message}`);
  }
}

// Main function to process all CSV files in a directory
function processCSVBatch(directoryPath) {
  try {
    const csvFilePaths = readCSVFiles(directoryPath);
    csvFilePaths.forEach(file => processCSVFile(file));
  } catch (error) {
    console.error(`Error processing CSV batch: ${error.message}`);
  }
}

// Usage example:
// Replace './csvFiles' with the actual path to your CSV files directory
processCSVBatch('./csvFiles');