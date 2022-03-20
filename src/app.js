const express = require('express');
const mongoose = require('./db/mongoose');
const hbs = require('hbs');
const path = require('path');
const pageRouter = require('./routers/page');
const myInfoRouter = require('./routers/my_info');
const resumeRouter = require('./routers/resume');

const app = express();

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../src/public');
const viewsPath = path.join(__dirname, '../src/templates/views');
const partialsPath = path.join(__dirname, '../src/templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.use(express.json())
app.use(pageRouter);
app.use(myInfoRouter);
app.use(resumeRouter);


module.exports = app;