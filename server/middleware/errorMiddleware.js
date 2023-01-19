const winston = require('winston');

module.exports = function(err, req, res, next) {
  const errorLogger = winston.loggers.get('errors');

  errorLogger.error({
    message: err.message,
    metadata: err.stack,
    timestamp: winston.format.timestamp(new Date()).options
  });

  res.status(500).send('Something Failed.');
}