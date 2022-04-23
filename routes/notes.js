const fs = require('fs');
const notes = require('express').Router();
const path = require('path');
const uuid = require('../helpers/uuid')

notes.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data)=> {
        if (err) throw err;
    res.send(data)});
});

notes.post('/api/notes', (req, res) => {
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuid(),
    }

    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        let noteList = JSON.parse(data);
        noteList.push(newNote);
        fs.writeFile('./db/db.json', JSON.stringify(noteList), (err) => {
            if (err) throw err;
            res.send;
        })
    })
   
    }
);

notes.delete('/api/notes/:id', (req, res) => {
    console.log('will fix later lol')

})

module.exports = notes;