//Step1: Import fs module
const fs= require("fs");

//Read file Synchronously.
const data =fs.readFileSync("content.txt");    
console.log(data.toString());          


console.log("Program Completed");