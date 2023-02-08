const config = require('config');
const mongoose = require('mongoose');
const winston = require('winston');
const debug = require('debug')('app:db');

module.exports = function () {
  const db = config.get('db');

  mongoose.set('strictQuery', false);
  mongoose
    .connect(db, {
      pass: process.env.DB_PASS,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      winston.info(`Connected to ${db}...`);
      debug(`Connected to ${db}...`);
    });
};
