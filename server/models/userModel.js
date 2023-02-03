const config = require('config');
const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    minlength: 5,
    maxlength: 30,
    required: true
  },
  lastname: {
    type: String,
    minlength: 2,
    maxlength: 50,
    required: true
  },
  email: {
    type: String,
    minlength: 5,
    maxlength: 255,
    unique: true,
    required: true
  },
  password: {
    type: String,
    minlength: 8,
    maxlength: 1024,
    required: true
  },
  discover: {
    type: String,
    maxlength: 500
  },
  isAdmin: Boolean
});

userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, config.get('jwtPrivateKey'));
  return token;
}

const User = mongoose.model('User', userSchema);

function validateUser(input) {
  const schema = Joi.object({
    firstname: Joi.string().min(5).max(50).required(),
    lastname: Joi.string().min(2).max(50).required(),
    email: Joi.string().email().min(5).max(255).required(),
    password: Joi.string().min(8).max(1024).required(),
    discover: Joi.string().max(50).allow(''),
    isAdmin: Joi.boolean()
  });

  return schema.validate(input);
}

exports.User = User;
exports.validate = validateUser;