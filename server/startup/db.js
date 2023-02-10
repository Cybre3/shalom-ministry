const config = require('config');
const mongoose = require('mongoose');
const winston = require('winston');
const debug = require('debug')('app:db');

module.exports = function (app) {
  let db;
  const environment = app.get('env');
  console.log(environment)

  switch (environment) {
    case 'production':
      const { dbName, host, pass, user } = config.get('db');
      db = `${host}://${process.env[user]}:${process.env[pass]}@${dbName}.w9isi1e.mongodb.net/?retryWrites=true&w=majority`;
      break;
    case 'test':
      db = 'mongodb://localhost/shalomMinistry_test';
      break;
    case 'development':
      db = 'mongodb://localhost/shalomMinistry';
      break;
  }
  console.log(db);

  mongoose.set('strictQuery', false);
  mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    winston.info(`Connected to ${db}...`);
    debug(`Connected to ${db}...`);
  });
};
