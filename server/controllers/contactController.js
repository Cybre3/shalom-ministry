const _ = require('lodash');
const { Contact } = require('../models/contactModel');

module.exports = {
  post: {
    saveNewContactMessage: async (req, res) => {
      const { email, fullname } = req.body;
      const [firstname, lastname] = fullname.split(' ');
      const contact = req.body;
      // let contactMessage = await Contact.findOne({ email });
      /* if (contactMessage) return res.status(400).send('Message with email already sent.'); */

      let contactInfo = new Contact({ firstname, lastname, ...contact });
      
      await contactInfo.save();

      res.status(200).send(_.pick(contactInfo, ['_id', 'firstname', 'lastname', 'email']));
    },
  },

  put: {
    editContactMessageById: async (req, res) => {
      const { contact } = req.body;

      const updatedContact = {};

      const contactToEdit = await Contact.findByIdAndUpdate(req.params.id, updatedContact, {
        new: true,
      });

      res.status(200).send(contactToEdit);
    },
  },
};
