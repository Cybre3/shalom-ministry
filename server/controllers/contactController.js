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

      // const contactMessage = await Contact.findOne({ email });

      const contactMessage = new Contact({ ...contact });
      
      await contactMessage.save();

      res.status(200).send(_.pick(contactMessage, ['_id', 'fullname', 'email']));
    },
  },
};
