module.exports = class Tweet{
    //it initializes properties with value provided
    constructor (content,timestamp,userID,id){
        this._id = id;
        this.content = content;
        this.timestamp = timestamp;
        this.userID = userID;

    }
}