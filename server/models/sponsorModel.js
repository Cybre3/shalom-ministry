const mongoose = require('mongoose');
const Joi = require('joi');
const JoiPhone = Joi.extend(require('joi-phone-number'));
const { Constant } = require('./constantModel');

const sponsorSchema = mongoose.Schema({
  messageNumber: {
    type: Number,
    required: true,
  },
  firstname: {
    type: String,
    minlength: 2,
    maxlength: 30,
  },
  lastname: {
    type: String,
    minlength: 2,
    maxlength: 50,
  },
  organizationName: {
    type: String,
    minlength: 5,
    maxlength: 100,
  },
  email: {
    type: String,
    minlength: 5,
    maxlength: 255,
    unique: false,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    maxlength: 500,
    required: true,
  },
  bestContact: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    default: 'sponsor',
  },
  date: {
    type: String,
    default: Date,
  },
});

sponsorSchema.post('save', async function () {
  await Constant.upCountByOne('messageNumber');
});

const Sponsor = mongoose.model('Sponsor', sponsorSchema);

function validateSponsor(input) {
  const schema = Joi.object({
    messageNumber: Joi.number().required(),
    firstname: Joi.string().min(2).max(30).allow(''),
    lastname: Joi.string().min(2).max(50).allow(''),
    organizationName: Joi.string().min(5).max(100).allow(''),
    email: Joi.string().email().min(5).max(255).required(),
    phone: JoiPhone.string().phoneNumber().required(),
    message: Joi.string().max(500).required(),
    bestContact: Joi.string().required().label('Best Mode of Contact'),
  });

  return schema.validate(input);
}

exports.Sponsor = Sponsor;
exports.validate = validateSponsor;
