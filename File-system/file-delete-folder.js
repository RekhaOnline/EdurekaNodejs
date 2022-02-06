const fs= require("fs");

console.log(__dirname); //directory path

//delete takes two parameter one is file and callback
// delete use unlink

fs.rmdir("files",{recursive:true},(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Folder Deteled");
    }
});