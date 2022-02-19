//express  - not part of core module.
//NPM (Package Manager)

//Java - Maven
//.Net - Nuget
//python -php

//Any app, needs lot of dependencies
//fs,http
//database.

// npm -v - node package

//npm init - answeer yes for the question
//npm i express

//package-lock.json locks the version mentioned in package.json even after 3 years
// the flow  is index.js -> user-auth-routes ->user-auth-controllers 
//Step1: Import express
const express = require("express");
const userAuthRoutes = require("./user/routes/user-auth-routes");
const userRoutes = require("./user/routes/user-routes");
const tweetRoutes = require("./tweet/routings/tweet");
const bodyParser = require("body-parser");
const mongodb = require("./config/mongodb");

//Step2: Create Server
const server =express();

//connect to mongodb
mongodb.connect();

//Step3: listen or open a port

server.listen(3200,()=>{
    console.log("Server is listening");
});

//Order of middlewares matter.
server.use(bodyParser.json());

//Routings.
server.use("/api/user/auth",userAuthRoutes);
server.use("/api/user/", userRoutes);
server.use("/api/tweet", tweetRoutes);
server.use((req, res)=>{
    res.status(404).send("Please check your path");
})

//Step4: Handle the default  request  - / is empty path
server.get("/",(req,res)=>{
    res.end("Hello from Express.. You are connected");

})

//- globally
//npm i -g -D nodemon
//local
//npm i -D nodemon 


// nodemon index.js