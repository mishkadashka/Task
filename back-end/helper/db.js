const mongoose = require("mongoose")

const uri = 
"mongodb+srv://dashkamishka02:<family272882>@exam-todolist.y9p8qhd.mongodb.net/"

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Database is successfully connected")
    } catch (error) {
        console.log(error)
    }
};

module.exports = connect;