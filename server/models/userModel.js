const config = require('config');
const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { Constant } = require('./constantModel');

const userNumber = async () => {
  const userNumber = await Constant.findOne({ type: 'userNumber' });
  return userNumber.amount;
};

const userSchema = mongoose.Schema({
  userNumber: {
    type: Number,
    default: userNumber()
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
  email: {
    type: String,
    minlength: 5,
    maxlength: 255,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 8,
    maxlength: 1024,
    required: true,
  },
  discover: {
    type: String,
    maxlength: 500,
  },
  date: {
    type: String,
    default: Date,
  },
  isAdmin: Boolean,
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, isAdmin: this.isAdmin },
    config.get('jwtPrivateKey') || process.env.jwtPrivateKey
  );
  return token;
};

const User = mongoose.model('User', userSchema);

function validateUser(input) {
  const schema = Joi.object({
    userNumber: Joi.number().required(),
    firstname: Joi.string().min(5).max(30).required(),
    lastname: Joi.string().min(2).max(50).required(),
    email: Joi.string().email().min(5).max(255).required(),
    password: Joi.string().min(8).max(1024).required(),
    discover: Joi.string().max(50).allow(''),
    isAdmin: Joi.boolean(),
  });

  return schema.validate(input);
}

exports.User = User;
exports.validate = validateUser;
