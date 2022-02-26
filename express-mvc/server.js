const express = require("express");
const userRoutes = require("./src/user/routes/user");
const path = require("path");
const bodyParser = require("body-parser");
const mongodb = require("./config/mongodb");
const session = require("express-session");

const server = express();

server.use(session({
    secret: "This is my private key",
    cookie: {maxAge: 300000},
    saveUninitialized: false
}));

mongodb.connect();

server.use(bodyParser.urlencoded({extended: false}));

server.use("/user/", userRoutes);

server.listen(3000);
server.get("/", (req, res)=>{
    console.log(path.join(__dirname,"./src/shared/views/home.html"))
    res.sendFile(path.join(__dirname,"./src/shared/views/home.html"));
});

console.log("Server is listening on 3000");