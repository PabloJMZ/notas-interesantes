const express = require('express');
const router = express.Router();

const index  = require("./controllers/index");
const notes = require('./controllers/notes');

router.get("/", index);
router.get("/api/note", notes);

module.exports = router