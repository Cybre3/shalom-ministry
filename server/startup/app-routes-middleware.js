const express = require('express');
const path = require('path');
const morgan = require('morgan');
const debug = require('debug')('app:startup');
const winston = require('winston');
const { format } = winston;
const { colorize, prettyPrint, label, combine, printf } = format;

const errors = require('../middleware/errorMiddleware');
const invoiceRouter = require('../routes/invoiceRoute');
const userRouter = require('../routes/userRoute');
const cwatRouter = require('../routes/cwatRegistrarRoute');
const authRouter = require('../routes/authRoute');
const contactRouter = require('../routes/contactRoute');
const sponsorRouter = require('../routes/sponsorRoute');

const myFormat = printf(({ level, message }) => {
  return `${level}: ${message}`;
});

module.exports = function (app) {
  app.use(express.json());

  if (app.get('env') === 'development' || app.get('env') === 'production') {
    app.use(morgan('tiny'));
    debug('Morgan Activated...');
  }

  winston.add(
    new winston.transports.Console({
      format: combine(label({ label: 'info' }), prettyPrint(), colorize(), myFormat),
    })
  );

  app.use('/invoices', invoiceRouter);
  app.use('/users', userRouter);
  app.use('/users/cwat-register', cwatRouter);
  app.use('/auth', authRouter);
  app.use('/contact-us', contactRouter);
  app.use('/give', sponsorRouter);
  app.use(errors);
};
