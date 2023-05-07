const mongoose = require('mongoose');
const Joi = require('joi');
const makeAllRequired = require('../utilities/makeAllRequired');

const cwatTicketSchema = mongoose.Schema({
  name: String,
  tier: Number,
  price: Number,
  bedType: String,
  numberOfBedsAvailable: Number,
  description: String,
  displayLine: String,
  disabled: Boolean
});

makeAllRequired(cwatTicketSchema);

/* CwatTicket.statics.addOne = function (ticketId) {
  return this.updateOne(
    { _id: ticketId },
    {
      $inc: { numberOfBedsAvailable: 1 },
    }
  );
};

CwatTicket.statics.bookOne = function (ticketId) {
  return this.updateOne(
    { _id: ticketId },
    {
      $inc: { numberOfBedsAvailable: -1 },
    }
  );
};
 */
const CwatTicket = mongoose.model('cwat-Ticket', cwatTicketSchema);

function validateCwatTicket(input) {
  const schema = Joi.object({
    name: Joi.string().required(),
    tier: Joi.number().required(),
    price: Joi.number().required(),
    bedType: Joi.string().required(),
    numberOfBedsAvailable: Joi.number().required(),
    description: Joi.string().required(),
    displayLine: Joi.string().required(),
    disabled: Joi.boolean(),
  });

  return schema.validate(input);
}

exports.CwatTicket = CwatTicket;
exports.validate = validateCwatTicket;