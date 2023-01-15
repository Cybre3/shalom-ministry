const makeAllRequired = require('../utilities/makeAllRequired');
const mongoose = require('mongoose');
const Joi = require('joi');

const invoiceSchema = mongoose.Schema({
  billTo: {
    type: String,
    minLength: 8,
    maxLength: 55,
  },
  invoiceNumber: {
    type: Number,
  },
  date: {
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
  quantity: {
    type: Number,
  },
  unitPrice: {
    type: Number,
  },
});

makeAllRequired(invoiceSchema);

const Invoice = mongoose.model('Invoice', invoiceSchema);

function validateInvoice(input) {
  const schema = Joi.object({
    billTo: Joi.string().required(),
    invoiceNumber: Joi.number().required(),
    date: Joi.date().required(),
    total: Joi.number().required(),
    paymentApplied: Joi.number().required(),
    description: Joi.string().required(),
    quantity: Joi.number().required(),
    unitPrice: Joi.number().required()
  })
  
 return schema.validate(input);
}

exports.Invoice = Invoice;
exports.validate = validateInvoice;