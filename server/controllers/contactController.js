const _ = require('lodash');
const { Contact } = require('../models/contactModel');

module.exports = {
  get: {
    getAllContactMessages: async (req, res) => {
      const contactMessages = await Contact.find({});

      res.status(200).send(contactMessages);
    },
  },

  post: {
    saveNewContactMessage: async (req, res) => {
      const { email } = req.body;
      const contact = req.body;

      // let contactMessage = await Contact.findOne({ email });
      /* if (contactMessage) return res.status(400).send('Message with email already sent.'); */

      let contactMessage = new Contact({ ...contact });

      await contactMessage.save();

      res.status(200).send(_.pick(contactMessage, ['_id', 'fullname', 'email']));
    },
  },
};
