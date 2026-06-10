const express = require('express');
const noteModel = require('./models/note.model');

const app = express();
app.use(express.json()); //middleware for parsing JSON bodies


/*
POST /notes - Create a note
GET /notes - Get all notes
GET /notes/:id - Get a note by ID
PUT /notes/:id - Update a note by ID
DELETE /notes/:id - Delete a note by ID
*/

app.post("/notes", async (req, res) => {
  
    const data = req.body /* {title: description:} */
    await noteModel.create({
        title: data.title,
        description: data.description
    })

    res.status(201).json({
        message: "Note created successfully"
    })
})

app.get("/notes", async (req, res) => {

})

module.exports = app;