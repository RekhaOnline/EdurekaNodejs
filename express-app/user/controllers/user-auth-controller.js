//Job of controller is to take request and send response
//model is to encapsulate the data.
const userModel =require("../models/user");
const repo = require("../repositories/user");
exports.register = (req,res)=>{

    const newUser = new userModel(req.body.name,req.body.email,
        req.body.password,req.body.gender);
        //Call Repo(newUser)
        repo.add(newUser,()=>{
            res.send("Data is Added");
        })
    //res.send("This is register"); //res.send is express comman to end which will call node js end
}

exports.login = (req,res)=>{
    console.log("This is login request");
    res.send("This is login");
}