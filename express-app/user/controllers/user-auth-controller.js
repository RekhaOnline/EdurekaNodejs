//Job of controller is to take request and send response
exports.register = (req,res)=>{
    console.log("This is register request");
    console.log(req.url);
    console.log(req.body);
    res.send("This is register"); //res.send is express comman to end which will call node js end
}

exports.login = (req,res)=>{
    console.log("This is login request");
    res.send("This is login");
}