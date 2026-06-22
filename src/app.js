const express = require('express');
const multer = require('multer');
const uploadFile = require("./services/storage.service");
const postModel = require("./models/post.model");


const app = express();
app.use(express.json());


const upload = multer({storage: multer.memoryStorage()});


app.post('/create-post', upload.single("image"), async (req, res) => {

    const imageUrl = await uploadFile(req.file.buffer);

    const post = await postModel.create({
        image: imageUrl,
        caption: req.body.caption,
    });

    return res.status(201).json({
        message: "Post created successfully",
        post
    });
});

app.get('/create-post', upload.single("image"), async (req, res) => {

});


module.exports = app;