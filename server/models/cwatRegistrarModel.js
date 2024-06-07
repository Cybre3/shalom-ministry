const mongoose = require('mongoose');
const Joi = require('joi');
const JoiPhone = Joi.extend(require('joi-phone-number'));
const { Constant } = require('./constantModel');

const cwatRegistrarSchema = new mongoose.Schema({
 firstname: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  lastname: {
    type: String,
    minlength: 2,
    maxlength: 50,
    required: true,
  },
  email: {
    type: String,
    minlength: 5,
    maxlength: 255,
    unique: true,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  allergies: {
    type: String,
    maxlength: 500,
  },
  questions: {
    type: String,
    maxlength: 500,
  },
  emergencyFullName: {
    type: String,
    minlength: 5,
    maxlength: 30,
    required: true,
  },
  emergencyEmail: {
    type: String,
    minlength: 5,
    maxlength: 255,
    unique: false,
    required: true,
  },
  emergencyPhone: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: new Date().toISOString().substring(0, 10),
  },
  bedReq: {
    type: String,
    required: true
  }
});

/* cwatRegistrarSchema.post('save', async function () {
  await Constant.upCountByOne('registrarNumber');
});
 */
const CwatRegistrar = mongoose.model("Cwat-Registrar'24", cwatRegistrarSchema);

function validateCwatRegistrar(input) {
  const schema = Joi.object({
    firstname: Joi.string().min(2).max(30).required(),
    lastname: Joi.string().min(2).max(50).required(),
    email: Joi.string().email().min(5).max(255).required(),
    phone: JoiPhone.string().phoneNumber().required(),
    allergies: Joi.string().max(500).allow(''),
    questions: Joi.string().max(500).allow(''),
    emergencyFullName: Joi.string().min(2).max(50).required(),
    emergencyEmail: Joi.string().email().min(5).max(255).required(),
    emergencyPhone: JoiPhone.string().phoneNumber().required(),
    shirtSize: Joi.string().required(),
    bedReq: Joi.string().required(),
  });

  return schema.validate(input);
}

exports.CwatRegistrar = CwatRegistrar;
exports.validate = validateCwatRegistrar;
