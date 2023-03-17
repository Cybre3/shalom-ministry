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
};
