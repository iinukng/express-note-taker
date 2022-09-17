// dependencies
const fs = require('fs');
const path = require('path');

  // new notes
  function genNewNote(body, notesArray) {
    const newNote = body
    notesArray.push(newNote);
    fs.writeFileSync(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify({notesArray}, null, 2)
    );
    return newNote;
  };

  // deleting notes
function dbData(id, notesArray) {
  const deleteNote = id;
  for (let i = 0; i < notesArray.length; i++) {
    if (deleteNote === notesArray[i].id) {
      notesArray.splice(i, 1);
      fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({notesArray}, null, 2), err => {
          if (err) {
            throw err;
          }
        });
    }
  }
}

  module.exports = {
    dbData,
    genNewNote,
  }; 