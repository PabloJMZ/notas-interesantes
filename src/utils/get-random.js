async function getRandom(model){
    const numDocs = await model.countDocuments();
    const indexRandom = Math.floor(Math.random() * numDocs);
    const note = await model.find({index: indexRandom});
    return note[0];
}

module.exports = getRandom;