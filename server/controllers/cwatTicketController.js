const { CwatTicket } = require('../models/cwatTicketModel');

module.exports = {
  get: {
    getAllCwatTicketTypes: async (req, res) => {
      const getAllCwatTicketTypes = await CwatTicket.find({});

      res.status(200).send(getAllCwatTicketTypes);
    },
    getCwatTicketByTier: async (req, res) => {
      res.status(200).send(await CwatTicket.findOne({ tier: req.params.tier }));
    },
  },
  post: {
    saveCwatTicket: async (req, res) => {
      const newCwatTicket = new CwatTicket({ ...req.body });
      const result = await newCwatTicket.save();

      res.status(200).send(result);
    },
  },
};
