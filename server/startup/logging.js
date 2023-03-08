const config = require('config');
const winston = require('winston');
const { format, transports } = winston;
const { combine, label, prettyPrint, colorize, timestamp, printf, metadata } = format;
require('winston-mongodb');
require('express-async-errors');

const myDefaultFormat = printf(({ level, message, label, timestamp }) => {
  const [errorMessage, ...stack] = message.split('\n');
  return `\n--- ${label} ${level} ---\n[${timestamp}] ${level} ${errorMessage}\nstack: ${stack.join(
    '\n'
  )}\n--- ${label} ${level} ---\n`;
});

const myReqFormat = printf(({ level, message, label, timestamp, metadata }) => {
  return `\n--- ${label} ${level} ---\n[${timestamp}] ${level} ${message}\nstack: ${metadata}\n--- ${label} ${level} ---\n`;
});

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
  // Catching errors outside of express request

  winston.loggers.add('exceptions', {
    level: 'error',
    format: combine(
      label({ label: 'exception' }),
      timestamp({ format: 'YYYY-MM-DD hh:mm:ss.SSS A' }),
      prettyPrint(),
      metadata(),
      myDefaultFormat
    ),
    transports: [
      new transports.Console({
        format: combine(colorize(), prettyPrint(), myDefaultFormat),
        handleExceptions: true,
      }),
      new transports.File({ filename: 'logs/exceptions.log', handleExceptions: true }),
      new transports.MongoDB({
        db: db,
        dbName: 'shalom-ministry',
        options: { useUnifiedTopology: true },
        storeHost: true,
        collection: 'shalom-ministry_logs',
        label: 'exception',
        handleExceptions: true,
      }),
    ],
  });

  winston.createLogger({
    level: 'error',
    format: combine(
      label({ label: 'rejection' }),
      timestamp({ format: 'YYYY-MM-DD hh:mm:ss.SSS A' }),
      prettyPrint(),
      myDefaultFormat
    ),
    rejectionHandlers: [
      new transports.Console({
        format: combine(colorize(), prettyPrint(), myDefaultFormat),
      }),
      new transports.File({ filename: 'logs/rejections.log' }),
      new transports.MongoDB({
        db: db,
        dbName: 'shalom-ministry',
        options: { useUnifiedTopology: true },
        storeHost: true,
        collection: 'shalom-ministry_logs',
        label: 'rejection',
      }),
    ],
  });

  // error logging config
  winston.loggers.add('errors', {
    format: combine(
      label({ label: 'request' }),
      timestamp({ format: 'YYYY-MM-DD hh:mm:ss.SSS A' }),
      prettyPrint(),
      myReqFormat
    ),
    transports: [
      new transports.Console({
        format: combine(colorize(), prettyPrint(), myReqFormat),
      }),
      new transports.File({
        filename: 'logs/requests.log',
        format: combine(prettyPrint(), myReqFormat),
      }),
      new transports.MongoDB({
        db: db,
        dbName: 'shalom-ministry',
        options: { useUnifiedTopology: true },
        storeHost: true,
        collection: 'shalom-ministry_logs',
        label: 'request',
      }),
    ],
  });
};
