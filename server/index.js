require('dotenv').config();
const config = require('config');
const express = require('express');
const winston = require('winston');

const app = express();

require('./startup/logging')(app);
require('./startup/cors')(app);
require('./startup/apiValidation')();
require('./startup/app-routes-middleware')(app);
require('./startup/config')();
require('./startup/db')(app);
require('./startup/prod')(app);

const port = process.env.PORT || 5000;
const server = app.listen(port, () => winston.info(`listening on port ${port}...`));

module.exports = server;
