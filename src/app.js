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

    const notes = await noteModel.find(); //alowes return array []

    res.status(200).json({
        message: "Notes fetched successfully",
        data: notes
    })
})

app.delete("/notes/:id", async (req, res) => {

    const id = req.params.id;

    await noteModel.findOneAndDelete({
        _id: id
    })
})

app.patch("/notes/:id", async (req, res) => {
    const id = req.params.id;
    const description = req.body.description;

   await noteModel.findOneAndUpdate({ _id: id }, { description : description })

   res.status(200).json({
    message: "Note updated successfully"
   })
})

module.exports = app;