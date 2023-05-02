const { CwatUnregistered } = require('../models/cwatUnregisteredModel');

module.exports = {
  get: {
    getAllCwatUnregistered: async (req, res) => {
      const getAllCwatUnregistered = await CwatUnregistered.find({});

      res.status(200).send(getAllCwatUnregistered);
    },
    getUnregisteredByTicketCode: async (req, res) => {
      const { ticketCode } = req.params;
      try {
        const unregisteredTicket = await CwatUnregistered.findOne({ verifyTicketCode: ticketCode });
        if (!unregisteredTicket) return res.status(404).send('Invalid Ticket Code!');

        res.status(200).send(unregisteredTicket);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
