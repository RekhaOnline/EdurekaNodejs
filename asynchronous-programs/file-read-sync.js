/*Step 1: Import "fs" (file system) library and File system is a core module
Sync.
*/
//Sync
const fs = require("fs");


//Step 2: Read file
//sync - processed by Main thread
const data = fs.readFileSync("data.txt");
console.log(data.toString());

console.log("Task 2");

//Step 3: Print the data
//sync
console.log("Task 3");

