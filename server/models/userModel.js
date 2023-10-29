const config = require('config');
const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { Constant } = require('./constantModel');

const userSchema = mongoose.Schema({
  basicInfo: {
    userNumber: {
      type: Number,
      required: true,
    },
    firstname: {
      type: String,
      minlength: 3,
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
    dateRegistered: {
      type: String,
      default: () => new Date().toISOString().substring(0, 10)
    },
    lastSignedIn: {
      type: String,
      default: () => new Date().toLocaleString("en-US")
    },
    profilePictureUrl: String
  },
  events: {},
  messages: {},
  admin: {
    isAdmin: Boolean,
    authorizedToDelete: Boolean,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, userEmail: this.basicInfo.email, isAdmin: this.admin.isAdmin, authorizedToDelete: this.admin.authorizedToDelete },
    config.get('jwtPrivateKey') || process.env.jwtPrivateKey,
    { expiresIn: '24h' },
  );
  return token;
};

userSchema.post('save', async function () {
  await Constant.upCountByOne('userNumber');
});

const User = mongoose.model('User', userSchema);

function validateUser(input) {
  const schema = Joi.object({
    basicInfo: Joi.object({
      userNumber: Joi.number().required(),
      firstname: Joi.string().min(3).max(30).required(),
      lastname: Joi.string().min(2).max(50).required(),
      email: Joi.string().email().min(5).max(255).required(),
      password: Joi.string().min(8).max(1024).required(),
      discover: Joi.string().max(50).allow(''),
    }).required(),
    admin: Joi.object({
      isAdmin: Joi.boolean(),
      authorizedToDelete: Joi.boolean(),
    }).required()
  });

  return schema.validate(input);
}

exports.User = User;
exports.validate = validateUser;
