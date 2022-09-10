const router = require ('express').Router();
const uuid = require('uuid');
const fs = require("fs");

const editNote = (updatedNotesArray) => {
  fs.writeFile("db/db.json", JSON.stringify(updatedNotesArray), (err) => {
    if (err) throw err;
  });
};



  router.get("/notes", (req, res) => {
    fs.readFile("db/db.json", "utf8", (err, data) => {
      if (err) throw err; 
      res.json(JSON.parse(data));
    });
  });


  router.post("/notes", (req, res) => {
    const newNote = req.body;
    fs.readFile("db/db.json", "utf8", (err, data) => {
      if (err) throw err;
      const notesArr = JSON.parse(data);
      const uniqueRandomID = uuid.v4();
      newNote.id = uniqueRandomID;
      notesArr.push(newNote);
      editNote(notesArr);
      console.log(`New Note Added! Title: ${JSON.stringify(newNote.title)}, 
        Text: ${JSON.stringify(newNote.text)}, ID: ${newNote.id}`
      );
    res.send(notesArr);
    });
  });


  router.delete("/notes/:id", (req, res) => {
    const deleteId = req.params.id;
    fs.readFile("db/db.json", "utf8", (err, data) => {
      if (err) throw err;
      let notesArr = JSON.parse(data);
      for (let i = 0; i < notesArr.length; i++) {
        if (notesArr[i].id === deleteId) {
          notesArr.splice(i, 1);
        }
      }
      editNote(notesArr);
      console.log(`Note Deleted! Note ID: ${deleteId}`);
      res.send(notesArr);
    });
  });

  module.exports = router;