const express = require('express');
const bodyParser = require('body-parser');

const router = require('./routes/index');
const initDbConnection = require('./db/mongoose');

const app = express();

/* ************************
 *      middlewares       *
 ************************ */
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* *************************
 *         routes          *
 ************************* */
app.use('/api', router);

initDbConnection();

module.exports = app;