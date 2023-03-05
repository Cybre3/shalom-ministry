const { Sponsor } = require('../models/sponsorModel');
const _ = require('lodash');

module.exports = {
  get: {
    allSponsors: async (req, res) => {
      const allSponsors = await Sponsor.find({});

      res.status(200).send(allSponsors);
    },
  },

  post: {
    saveNewSponsor: async (req, res) => {
      const { firstname, email, organizationName, phone } = req.body;

      let sponsor = await Sponsor.findOne({
        $or: [
          { firstname, email },
          { organizationName, email },
          { firstname, phone },
          { organizationName, phone },
          { firstname, organizationName, email },
        ],
      });
      if (sponsor)
        return res
          .status(400)
          .send(
            'You have already sent an inquiry to Shalom Ministry.\nSomeone will reach out to you shortly!'
          );

      sponsor = new Sponsor({ ...req.body });

      await sponsor.save();

      res.status(200).send(_.pick(req.body, ['_id', 'firstname', 'organizationName', 'email']));
    },
  },
};
