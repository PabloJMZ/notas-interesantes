const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    text: String,
    origin: String,
    index: Number
});

const Note = new mongoose.model("Note", noteSchema);

module.exports = Note;