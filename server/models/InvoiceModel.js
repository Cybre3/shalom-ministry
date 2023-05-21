const makeAllRequired = require('../utilities/makeAllRequired');
const mongoose = require('mongoose');
const Joi = require('joi');
const JoiPhone = Joi.extend(require('joi-phone-number'));
const { Constant } = require('./constantModel');

const invoiceSchema = mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
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
  date: {
    type: String,
    default: Date,
  },
});

makeAllRequired(invoiceSchema);

invoiceSchema.post('save', async function () {
  await Constant.upCountByOne('invoiceNumber');
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

function validateInvoice(input) {
  const schema = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().required(),
    phone: JoiPhone.string().phoneNumber().required(),
    invoiceNumber: Joi.number().required(),
    currentDate: Joi.date().required(),
    total: Joi.number().required(),
    paymentApplied: Joi.number().required(),
    description: Joi.string().required(),
    qty: Joi.number().required(),
    unitPrice: Joi.number().required(),
    amount: Joi.number().required(),
    balanceDue: Joi.number().required(),
    comments: Joi.string().allow(''),
  });

  return schema.validate(input);
}

exports.Invoice = Invoice;
exports.validate = validateInvoice;
