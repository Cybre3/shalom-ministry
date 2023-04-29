const mongoose = require('mongoose');
const Joi = require('joi');
const makeAllRequired = require('../utilities/makeAllRequired');

const cwatUnregisteredSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  paymentMethod: String,
  NumberOfPayments: Number,
  verifyTicketCode: String,
  roomType: String,
  bedType: String,
});

makeAllRequired(cwatUnregisteredSchema);

const CwatUnregistered = mongoose.model('cwat-unregistered', cwatUnregisteredSchema);

function validateCwatUnregistered(input) {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    paymentMethod: Joi.string().required(),
    NumberOfPayments: Joi.number().required(),
    verifyTicketCode: Joi.string().required(),
    roomType: Joi.string().required(),
    bedType: Joi.string().required(),
  });

  return schema.validate(input);
}

exports.CwatUnregistered = CwatUnregistered;
exports.validate = validateCwatUnregistered;
