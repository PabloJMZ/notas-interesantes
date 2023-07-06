const express = require('express');
const app = express();

require('dotenv').config();

port = 3000 || process.env.PORT;
const routes = require("./src/routes");
const morgan = require('morgan');
const path = require('path');
const connect  = require('./src/database/connect');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "src", 'views'));

app.use(morgan("common"))
app.use(express.static(path.join(__dirname, "src", "public")));
app.use(routes);

async function start(){
    try {
      await connect(process.env.MONGO_URI);  
      app.listen(port, console.log("init"));
    } catch (error) {
        throw error;
    }
}

start();