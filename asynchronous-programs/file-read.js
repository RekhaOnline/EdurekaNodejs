/*Step 1: Import "fs" (file system) library and File system is a core module
*/
//Sync
const fs = require("fs");
const printDataFunction = function printData(err,data) {
    if(err){
        console.log(err);
    }else{
    console.log(data.toString());
    }
}

//Step 2: Read file
//Giving Instruction to thread pool
//Please read data from file and when you are done.
//push callback function to event queue with data or error.
//Async - processed by threadpool
fs.readFile("data.txt",printDataFunction);

console.log("Task 2");

//Step 3: Print the data

console.log("Task 3");

