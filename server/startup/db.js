const config = require('config');
const mongoose = require('mongoose');
const winston = require('winston');
const debug = require('debug')('app:db');

module.exports = function () {
  const { dbName, host, pass, user } = config.get('db');
  const db = `${host}://${process.env[user]}:${process.env[pass]}@${dbName}.w9isi1e.mongodb.net/?retryWrites=true&w=majority`;

  mongoose.set('strictQuery', false);
  mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    winston.info(`Connected to ${db}...`);
    debug(`Connected to ${db}...`);
  });
};
