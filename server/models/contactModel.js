const mongoose = require('mongoose');
const Joi = require('joi');

const contactSchema = mongoose.Schema({
  fullname: {
    type: String,
    minlength: 5,
    maxlength: 30,
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
  date: {
    type: String,
    default: Date
  }
});

const Contact = mongoose.model('Contact', contactSchema);

function validateContact(input) {
  const schema = Joi.object({
    fullname: Joi.string().min(5).max(30).required(),
    email: Joi.string().email().min(5).max(255).required(),
    message: Joi.string().min(2).max(50).required(),
  });

  return schema.validate(input);
}

exports.Contact = Contact;
exports.validate = validateContact;