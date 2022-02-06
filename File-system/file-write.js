//write function has three parameter  - file to write, data to read,callback function

const fs = require ("fs");
const data = {
    "name": "Please enter your name",
    "age":"Please enter your age"
};

fs.writeFile("data.txt",JSON.stringify(data),(err)=>{
    if(err){
        console.log(err);

    }else{
        console.log("Data Write Competed");
    }
});

console.log("Program Completed");