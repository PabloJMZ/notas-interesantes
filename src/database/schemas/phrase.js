const mongoose = require('mongoose');

const phraseSchema = new mongoose.Schema({
    text: String,
    author: String,
    index: Number
});

const Phrase = new mongoose.model("Phrase", phraseSchema);

module.exports = Phrase;