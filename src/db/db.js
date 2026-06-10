const mongoose = require('mongoose');


async function connectDB() {
    
    await mongoose.connect("mongodb://Tomal:0BRteBzZfBD2YsB0@ac-yrqvom0-shard-00-00.vcbnbwp.mongodb.net:27017,ac-yrqvom0-shard-00-01.vcbnbwp.mongodb.net:27017,ac-yrqvom0-shard-00-02.vcbnbwp.mongodb.net:27017/?ssl=true&replicaSet=atlas-33eqvc-shard-0&authSource=admin&appName=yt-compite-backend/hallye")
    

    console.log("Connected to DB");
}

module.exports = connectDB;