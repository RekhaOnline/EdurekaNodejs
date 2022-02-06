const fs= require("fs");

//delete takes two parameter one is file and callback
// delete use unlink

fs.unlinkSync("data.json");
console.log("File Deteled");
    
//file.rm to delete a folder or directory
//export the file to other file
module.exports.fs =fs;
module.exports.http=require("http");
