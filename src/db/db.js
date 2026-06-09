const mongoose = require('mongoose');



async function connectDB() {
    
    await mongoose.connect("mongodb+srv://yt:LW8jGQaG9rNKMnlQ@yt-compite-backend.vcbnbwp.mongodb.net/halley")

    console.log("Connected to DB");
}

module.exports = connectDB;