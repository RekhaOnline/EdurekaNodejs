//Job of controller is to take request and send response
//model is to encapsulate the data.
const userModel =require("../models/user");
const repo = require("../repositories/user");
const jwt = require("jsonwebtoken");
exports.register = (req,res)=>{

    const newUser = new userModel(req.body.name,req.body.email,
        req.body.password,req.body.gender);
        //Call Repo(newUser)
        repo.add(newUser,()=>{
            res.send("Data is Added");
        })
    //res.send("This is register"); //res.send is express comman to end which will call node js end
}

exports.login = (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;
    repo.getByEmail(email, (record)=>{
     if(!record){
         return res.status(400).send("Invalid Email");
     }
     if(record.password==password){
          // Create token using "jsonwebtoken"
          const token = jwt.sign({
            _id: record._id,
            email: record.email
        },
        "This is my secret key",
        {
            expiresIn: '2h'
        }
        );
        record.token=token;
        record.password=null;
        res.status(200).send(record);
     }else{
         res.status(400).send("Invalid Password");
     }
    })
    
 }