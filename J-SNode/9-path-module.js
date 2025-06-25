const path = require('path');

console.log(path.sep); // Outputs the path separator for the current OS (e.g., '/' on Unix, '\' on Windows)

const filePath = path.join('/content', 'subfolder', 'test.txt'); // Joins the path segments into a single path
console.log(filePath); // Outputs the joined path

const base = path.basename(filePath); // Gets the last portion of the path
console.log(base); // Outputs the base name of the file

const absolute = path.resolve(__dirname, 'constent','subfolder','test.txt')
 
console.log(absolute)