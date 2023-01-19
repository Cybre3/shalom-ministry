const config = require('config');
const morgan= require('morgan');
const winston = require('winston');
const { format, transports } = winston;
const { combine, label, prettyPrint, colorize, timestamp, printf, metadata } = format;
require('winston-mongodb');
require('express-async-errors');

const myDefaultFormat = printf(({ level, message, label, timestamp }) => {
  const [errorMessage, ...stack] = message.split('\n');
  return `\n--- ${label} ${level} ---\n[${timestamp}] ${level} ${errorMessage}\nstack${stack.join(
    '\n'
  )}\n--- ${label} ${level} ---\n`;
});

const myReqFormat = printf(({ level, message, label, timestamp, metadata }) => {
  return `\n--- ${label} ${level} ---\n[${timestamp}] ${level} ${message}\nstack${metadata}\n--- ${label} ${level} ---\n`;
});

module.exports = function() {
  const db = config.get('db');
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
        options: { useUnifiedTopology: true },
        storeHost: true,
        collection: 'shalomMinistry_logs',
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
        options: { useUnifiedTopology: true },
        storeHost: true,
        collection: 'shalomMinistry_logs',
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
        filename: 'logs/errors.log',
        format: combine(prettyPrint(), myReqFormat),
      }),
      new transports.MongoDB({
        db: db,
        options: { useUnifiedTopology: true },
        storeHost: true,
        collection: 'shalomMinistry_logs',
        label: 'request',
      }),
    ],
  });
}