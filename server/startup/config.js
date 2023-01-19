const config = require('config');
const winston = require('winston');

module.exports = function() {
  winston.info(`Application Name: ${config.get('name')}`);
}