const fs= require("fs");

//delete takes two parameter one is file and callback
// delete use unlink

fs.unlink("data.txt",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("File Deteled");
    }
});