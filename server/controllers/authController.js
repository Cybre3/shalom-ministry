const bcrypt = require('bcrypt');
// const jwtDecode = require('jwt-decode');
const { User } = require('../models/userModel');

module.exports = {
  get: {
    allUsers: async (req, res) => {
      let users = await User.find({});

      res.status(200).send(users);
    },
  },
  post: {
    authenticateUser: async (req, res) => {
      const { email, password } = req.body;

      let user = await User.findOne({ email });
      if (!user) return res.status(400).send('Invalid email or password.');

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) res.status(400).send('Invalid email or password.');

      try {
        const token = user.generateAuthToken();
        // req.token = token;

        res.status(200).header('x-auth-token', token).send(token);
      } catch (error) {
        res.status(400).send('Invalid token.');
      }
    },
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
