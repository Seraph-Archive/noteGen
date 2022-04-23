const express = require('express');
const notesRouter = require('./routes/notes.js')
const htmlRouter = require('./routes/html.js')

const PORT = process.env.port || 3001;

const app = express();

app.use(express.json());
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

app.use(htmlRouter);
app.use(notesRouter);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`))