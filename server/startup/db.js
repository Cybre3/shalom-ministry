const config = require('config');
const mongoose = require('mongoose');
const winston = require('winston');
const debug = require('debug')('app:db');

module.exports = function (app) {
  let db;
  const environment = app.get('env');

  switch (environment) {
    case 'production':
      const { dbName, host, pass, user } = config.get('db');
      db = `${host}://${process.env[user]}:${process.env[pass]}@${dbName}.gg9r8ag.mongodb.net/shalom-ministry?retryWrites=true&w=majority`;
      break;
    case 'test':
      db = 'mongodb://localhost/shalom-ministry_test';
      break;
    case 'development':
      db = 'mongodb://localhost/shalom-ministry';
      break;
  }

  mongoose.set('strictQuery', false);
  mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    if (environment === 'production') winston.info(`Connected to monogoDB...`);
    else {
      winston.info(`Connected to ${db}...`);
      debug(`Connected to ${db}...`);
    }
  });
};
