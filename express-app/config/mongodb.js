//Step1: Importmongodb library
const mongoDbclient = require("mongodb").MongoClient;

//Step2: Get connection string
const url ="mongodb+srv://Rekhakrishna:test@cluster0.phu4x.mongodb.net/twitterapp?retryWrites=true&w=majority";

//step3: connect to MongoDB database server.
var dbClient;
exports.connect =() =>{
    mongoDbclient.connect(url)
    .then(
        (client)=>{
            dbClient = client;
            console.log("MongoDB is connected");
        },
        (err)=>{console.log(err);}
    )
}

exports.getCollection =(name)=>{
    return dbClient.db("twitterapp").collection(name);
}
