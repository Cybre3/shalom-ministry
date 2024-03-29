const mongoose = require('mongoose');
const Joi = require('joi');
const JoiPhone = Joi.extend(require('joi-phone-number'));
const { Constant } = require('./constantModel');

const cwatRegistrarSchema = new mongoose.Schema({
  registrarNumber: {
    type: Number,
    required: true,
  },
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
  discover: {
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
  ticketOption: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    default: 'CWAT',
  },
  date: {
    type: String,
    default: new Date().toISOString().substring(0, 10),
  },
  ticketOptionData: {
    type: Object,
    required: true
  },
  ticketPurchaseData: {
    type: Object,
    required: true
  },
  shirtSize: {
    type: String,
    required: true,
  },
});

cwatRegistrarSchema.post('save', async function () {
  await Constant.upCountByOne('registrarNumber');
});

const CwatRegistrar = mongoose.model('Cwat-Registrar', cwatRegistrarSchema);

function validateCwatRegistrar(input) {
  const schema = Joi.object({
    registrarNumber: Joi.number().required(),
    firstname: Joi.string().min(2).max(30).required(),
    lastname: Joi.string().min(2).max(50).required(),
    email: Joi.string().email().min(5).max(255).required(),
    phone: JoiPhone.string().phoneNumber().required(),
    allergies: Joi.string().max(500).allow(''),
    questions: Joi.string().max(500).allow(''),
    discover: Joi.string().max(500).allow(''),
    emergencyFullName: Joi.string().min(2).max(50).required(),
    emergencyEmail: Joi.string().email().min(5).max(255).required(),
    emergencyPhone: JoiPhone.string().phoneNumber().required(),
    ticketOption: Joi.string().required(),
    ticketOptionData: Joi.object().required(),
    ticketPurchaseData: Joi.object().required(),
    shirtSize: Joi.string().required(),
  });

  return schema.validate(input);
}

exports.CwatRegistrar = CwatRegistrar;
exports.validate = validateCwatRegistrar;
