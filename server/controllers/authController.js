const bcrypt = require('bcrypt');
const jwtDecode = require('jwt-decode');
const jwt = require('jsonwebtoken');
const { User } = require('../models/userModel');
const optGenerator = require('otp-generator');

module.exports = {
  get: {
    allUsers: async (req, res) => {
      const users = await User.find({});

      res.status(200).send(users);
    },

    getUserById: async (req, res) => {
      const userFound = await User.findById(req.params.id);
      if (!userFound) return res.status(404).send('User not found.');

      res.send(userFound);
    },
  },
  post: {
    authenticateUser: async (req, res) => {
      const { email, password } = req.body;

      let user = await User.findOne({ 'basicInfo.email': email });
      if (!user) return res.status(400).send('Invalid email');

      try {
        const validPassword = bcrypt.compare(password, user.basicInfo.password);
        if (!validPassword) return res.status(400).send('Invalid password.');
     
        const token = user.generateAuthToken();
        req.token = token;
        await User.updateOne({ 'basicInfo.email': email }, { 'basicInfo.lastSignedIn': new Date().toLocaleString('en-US') });

        res
          .status(200)
          .header('x-auth-token', token)
          .send({
            msg: "Login Successfull!",
            userId: user._id,
            userEmail: user.basicInfo.email,
            token
          });
      } catch (error) {
        res.status(400).send('Invalid token.');
      }
    },

    generateOTP: (req, res, next) => {
      const { email } = req.body;

      req.app.locals.OTP = optGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false })

      const systemEmailDetail = {
        firstname: req.user.basicInfo.firstname,
        msg: `You have requested to reset your password.<br />Below is your One-time-passcode`,
        subject: 'Reset password',
        instructionMsg: req.app.locals.OTP,
        email
        // logo: base64img
      }

      req.systemEmailDetail = systemEmailDetail;

      next();
      // res.status(201).send({ code: req.app.locals.OTP })
    },

    verifyOTP: (req, res) => {
      const code = req.app.locals.OTP;

      if (parseInt(req.app.locals.OTP) === parseInt(code)) {
        req.app.locals.OTP = null;
        req.app.locals.resetSession = true;

        return res.status(201).send({ msg: "OTP Verification Successful!" })
      }
      return res.status(400).send({ error: "Invalid OTP" });
    },

    createResetSession: (req, res) => {
      if (req.app.locals.resetSession) {
        const token = req.user.generateAuthToken();
        req.token = req.app.locals.token = token; 

        console.log(token);
        return res.status(201).send({ flag: req.app.locals.resetSession })
      }

      return res.status(440).send({ error: "Session expired!" })
    },

  },

  put: {
    resetPassword: async (req, res) => {
      const { email } = req.params;
      const { password } = req.body;
      // const validateUser = jwtDecode(req.token);

      if (!req.app.locals.resetSession) return res.status(404).send({ msg: "Session expired!" });
      // if ()

      let user = await User.findOne({ 'basicInfo.email': email });
      if (!user) return res.status(400).send('Invalid email');

      await User.updateOne({ 'basicInfo.email': email }, { password });
      req.app.locals.resetSession = false;

      const systemEmailDetail = {
        firstname: user.basicInfo.firstname,
        msg: `Your password has been reset. <br /> If you did not do this, please send a message to Shalom Ministry.`,
        subject: 'Password Reset',
        email
        // logo: base64img
      }

      req.systemEmailDetail = systemEmailDetail;

      next();
    }
  },

  verifyUser: async (req, res, next) => {
    const { email } = req.body;

    let user = await User.findOne({ 'basicInfo.email': email });
    if (!user) return res.status(400).send('Invalid email');

    req.user = user;

    next();
  },
  // reroute: {
  //   toDashboard: async (req, res) => {
  //     const { token } = req;
  //     const validateUser = jwtDecode(token);

  //     if (validateUser.isAdmin)
  //       res
  //       .header('x-auth-token', token)
  //       .writeHead(200, { Location: 'http://shalomministrymovin4ward.org/dashboard' });
  //     return res.end();
  //   },
  // },
};
