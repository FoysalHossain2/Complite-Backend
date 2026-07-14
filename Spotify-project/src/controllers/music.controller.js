const musicModel = require("../models/music.model");


async function cerateMusic(res, req) {
    
    const token = res.cookies.token;

    if(!token){
    
        return res.status(401).json({message: "Unauthorized"})
    }

    try {
       const decoded = jwt.verify(token, process.env.JWT_SECRET)

       if(decoded.role !== "artist"){
         return res.status(403).json({message: "You don't  have access to create an music"})
       }

    } catch (err) {
        return res.status(401).json({message: "Unauthorized"})
    }

    const {title} = res.body;
    const file = req.file;

}