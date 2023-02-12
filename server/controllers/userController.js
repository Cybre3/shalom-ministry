const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User, validate } = require('../models/userModel');

module.exports = {
  post: {
    addNewUser: async (req, res) => {
      const { email } = req.body;

      let user = await User.findOne({ email: email });
      if (user) return res.status(400).send(`User with email: ${email} already registered.`);

      try {
        user = new User(_.pick(req.body, ['firstname', 'lastname', 'email', 'password', 'isAdmin']));
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();

        const token = user.generateAuthToken();
        res.status(200).header('x-auth-token', token).send(_.pick(user, ['_id', 'firstname', 'lastname', 'email', 'isAdmin']));
      } catch (error) {
        res.send(error.message);
      }
    },
  },
};
