const mongoose = require('mongoose');
const Joi = require('joi');
const makeAllRequired = require('../utilities/makeAllRequired');

const cwatTicketSchema = mongoose.Schema({
  name: String,
  price: Number,
  bedType: String,
  numberOfBedsAvailable: Number,
  description: String
});

makeAllRequired(cwatTicketSchema);

const CwatTicket = mongoose.model('cwat-Ticket', cwatTicketSchema);

function validateCwatTicket(input) {
  const schema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    bedType: Joi.string().required(),
    numberOfBedsAvailable: Joi.number().required(),
    description: Joi.number().required(),
  });

  return schema.validate(input);
}

exports.CwatTicket = CwatTicket;
exports.validate = validateCwatTicket;