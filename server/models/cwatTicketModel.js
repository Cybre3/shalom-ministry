const mongoose = require('mongoose');
const Joi = require('joi');
const makeAllRequired = require('../utilities/makeAllRequired');

const cwatTicketSchema = mongoose.Schema({
  name: String,
  label: String,
  tier: Number,
  price: Number,
  bedType: String,
  roomType: String,
  numberOfBedsAvailable: Number,
  description: String,
  displayLine: String,
  disabled: Boolean,
  soldOut: Boolean
});

makeAllRequired(cwatTicketSchema);

cwatTicketSchema.statics.downCountByOne = function (cwatTicketLabel) {
  return this.updateOne(
    { label: cwatTicketLabel },
    {
      $inc: { numberOfBedsAvailable: -1 },
    }
  );
};

const CwatTicket = mongoose.model('cwat-Ticket', cwatTicketSchema);

function validateCwatTicket(input) {
  const schema = Joi.object({
    name: Joi.string().required(),
    label: Joi.string().required(),
    tier: Joi.number().required(),
    price: Joi.number().required(),
    bedType: Joi.string().required(),
    roomType: Joi.string().required(),
    numberOfBedsAvailable: Joi.number().required(),
    description: Joi.string().required(),
  });

  return schema.validate(input);
}

exports.CwatTicket = CwatTicket;
exports.validate = validateCwatTicket;
