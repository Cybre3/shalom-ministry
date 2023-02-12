const makeAllRequired = require('../utilities/makeAllRequired');
const mongoose = require('mongoose');
const Joi = require('joi');

const invoiceSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  invoiceNumber: {
    type: Number,
  },
  currentDate: {
    type: Date,
  },
  total: {
    type: Number,
  },
  paymentApplied: {
    type: Number,
  },
  description: {
    type: String,
  },
  qty: {
    type: Number,
  },
  unitPrice: {
    type: Number,
  },
  amount: {
    type: Number,
  },
  balanceDue: {
    type: Number,
  },
  comments: {
    type: String,
  },
});

makeAllRequired(invoiceSchema);

const Invoice = mongoose.model('Invoice', invoiceSchema);

function validateInvoice(input) {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.number().required(),
    invoiceNumber: Joi.number().required(),
    currentDate: Joi.date().required(),
    total: Joi.number().required(),
    paymentApplied: Joi.number().required(),
    description: Joi.string().required(),
    qty: Joi.number().required(),
    unitPrice: Joi.number().required(),
    amount: Joi.number().required(),
    balanceDue: Joi.number().required(),
    comments: Joi.string().required().allow(''),
  });

  return schema.validate(input);
}

exports.Invoice = Invoice;
exports.validate = validateInvoice;
