const router = require('express').Router();
const {genNewNote, dbData} = require("../../lib/notes");
const { v4: uuidv4 } = require('uuid');
const {notesArray} = require("../../db/db.json");

// show all notes in json data
router.get("/notes", (req, res) => {
    let results = notesArray;
    res.json(results);
  });

  router.post("/notes", (req, res) => {
    req.body.id = uuidv4();
    const newNote = genNewNote(req.body, notesArray);
    res.json(newNote);
  });  

  router.delete("/notes/:id" , (req, res) => {
    const params = req.params.id
    dbData(params, notesArray);
    res.redirect('');
  });

  module.exports = router;