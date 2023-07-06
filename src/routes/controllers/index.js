const path = require('path');
const getRandom = require('../../utils/get-random');
const Note = require('../../database/schemas/note');
const Phrase = require('../../database/schemas/phrase');

const indexFilePath = path.join(__dirname, "..", "..", "views", "index.html");

async function home(req, res, next){
    try {
        const { origin: link, text: note } = await getRandom(Note);
        const {text: phrase, author} = await getRandom(Phrase);
        const data = {phrase, author, note, link};
        res.render('index', data);
    } catch (error) {
        next(error);
    }
}

module.exports = home;