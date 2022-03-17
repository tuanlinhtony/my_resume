const express = require('express');
const mongoose = require('./db/mongoose');
const hbs = require('hbs');
const path = require('path');
const pageRouter = require('./routers/page');

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
app.use(pageRouter);

module.exports = app;