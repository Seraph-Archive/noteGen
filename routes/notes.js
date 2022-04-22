const notes = require('express').Router();

notes.get('/api/notes', (req, res) => {
    readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/api/notes', (req, res) => {
    const { title, text } = req.body;
    if (req.body) {
        const newNote = {
            title,
            text,
        };
        readAndAppend(newNote, '../db/db.json');
    }
});

// notes.delete('/api/notes/:id', (req, res) => {
//     const deletedNote
// })

module.exports = notes;