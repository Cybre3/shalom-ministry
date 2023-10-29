const mongoose = require('mongoose');
const Joi = require('joi');
const { Constant } = require('./constantModel');

const contactSchema = mongoose.Schema({
  messageNumber: {
    type: Number,
    required: true,
  },
  firstname: {
    type: String,
    minlength: 5,
    maxlength: 30,
    required: true,
  },
  lastname: {
    type: String,
    minlength: 2,
    maxlength: 50,
    required: true,
  },
  message: {
    type: String,
    minlength: 2,
    maxlength: 50,
    required: true,
  },
  email: {
    type: String,
    minlength: 5,
    maxlength: 255,
    unique: false,
    required: true,
  },
  category: {
    type: String,
    default: 'contact us',
  },
  date: {
    type: String,
    default: new Date().toISOString().substring(0, 10),
  },
});

contactSchema.post('save', async function () {
  await Constant.upCountByOne('messageNumber');
});

const Contact = mongoose.model('Contact', contactSchema);

function validateContact(input) {
  const schema = Joi.object({
    messageNumber: Joi.number().required(),
    fullname: Joi.string().min(5).max(30).required(),
    email: Joi.string().email().min(5).max(255).required(),
    message: Joi.string().min(2).max(50).required(),
  });

  return schema.validate(input);
}

exports.Contact = Contact;
exports.validate = validateContact;