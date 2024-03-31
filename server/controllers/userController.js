const bcrypt = require('bcrypt');
const _ = require('lodash');
// const fs = require('fs');

const { User, validate } = require('../models/userModel');

// const smLogo = '../assets/SM-Logo.png';
// var base64img = fs.readFileSync(smLogo, 'base64');

module.exports = {
  get: {
    allUsers: async (req, res) => {
      const users = await User.find({});

      res.status(200).send(users);
    },
  },

  post: {
    addNewUser: async (req, res, next) => {
      const { email, firstname } = req.body.basicInfo;

      let user = await User.findOne({ 'basicInfo.email': email });
      if (user) return res.status(400).send(`User with email: ${email} already registered.`);

      req.body.basicInfo.email = req.body.basicInfo.email.toLowerCase();
      user = new User(req.body);

      await user.save();

      // const token = user.generateAuthToken();
      const systemEmailDetail = {
        msg: "Thank you for registering to Shalom Ministry!",
        subject: 'Verify Email',
        linkText: 'Verify email',
        instructionMsg: 'Please verify your email',
        email,
        firstname,
        linkURL: 'shalomministrymovin4ward.org',
        // logo: base64img
      }

      const adminEmail = {
        msg: "Thank you for registering to Shalom Ministry!",
        subject: 'email test',
        linkText: 'Verify email',
        instructionMsg: 'Please verify your email',
        email: 'shalom9ministry@gmail.com',
        firstname,
        linkURL: 'shalomministrymovin4ward.org',
      }

      req.systemEmailDetail = systemEmailDetail;
      req.adminEmail = adminEmail
      next();
    },

  },

  put: {
    updateUserById: async (req, res) => {
      const userData = req.body;

      const updatedUser = await User.updateOne(
        { _id: req.params.id },
        { profilePictureUrl: userData.photoUrl }
      );
      // console.log(updatedUser);

      res.status(200).send(updatedUser);
    },
  },
};
