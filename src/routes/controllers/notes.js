const Note = require("../../database/schemas/note");
const getRandom = require("../../utils/get-random");

async function notes(req, res, next){
    try {
        const note = await getRandom(Note);
        res.json(note);
    } catch (error) {
        next(error);
    }
}

module.exports = notes;