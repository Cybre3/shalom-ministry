const { CwatUnregistered } = require('../models/cwatUnregisteredModel');

module.exports = {
  get: {
    getAllCwatUnregistered: async (req, res) => {
      const getAllCwatUnregistered = await CwatUnregistered.find({});

      res.status(200).send(getAllCwatUnregistered);
    },
  },
};
