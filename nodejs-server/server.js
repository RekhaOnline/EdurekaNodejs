//Step1: Import http library
const http= require("http");

//Nodejs types of packages:
//1. Core Module(fs,http)
//2. External packages from npm (express,mongodb)
//node Package Manager

//Step2: Create a server
http.createServer((req,res)=>{
    res.end("Hello from NodeJS , you are connected!");
}).listen(3200);

console.log("Server is listening on 3200...");
//http://localhost:3200/

//NodeJS - (JS based Runtime for servers)
//ExpressJS (Framework for NodeJS)
//Spring boot (Framework for Java)
//Django(Framework for python)
//Angular (Framework for Javascript)
//.Net(Framework for C#)
//CodeIngnitor(Framework for for php)

//Benefits of Framework
//1. Do more with less code
//2. Save time and money
//3. Allows you to focus on domain
//4. Gives you lot of packages and also provides structure.