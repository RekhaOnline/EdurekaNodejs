const fs= require("fs");

const handler = (error,req,res,next)=>{

    fs.appendFileSync("./logs/server-error.txt", error.toString()
    +"\n"+error.stack.toString());
res.send("Server error has occured. Please contact support");
}

module.exports = handler;