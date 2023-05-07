const { Contact } = require('../models/contactModel');
const { Sponsor } = require('../models/sponsorModel');

module.exports = {
  get: {
    viewAllMessages: async (req, res) => {
      const contactMessages = await Contact.find({});
      const allSponsors = await Sponsor.find({});
      const allMessages = [...contactMessages, ...allSponsors];

      res.status(200).send(allMessages);
    },
  },

  delete: {
    deleteMessageById: async (req, res) => {
      const messageCategory = req.params.category;
      let Collection = '';

      switch (messageCategory) {
        case 'contact us':
          Collection = Contact;
          break;
        case 'sponsor':
          Collection = Sponsor;
      }

      const messageToDelete = await Collection.findByIdAndDelete(req.params.id);

      res.status(200).send(messageToDelete);
    },
  },
};
