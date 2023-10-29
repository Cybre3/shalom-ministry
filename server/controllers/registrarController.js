const _ = require('lodash');
const { CwatRegistrar } = require('../models/cwatRegistrarModel');
const { CwatUnregistered } = require('../models/cwatUnregisteredModel');
const { CwatTicket } = require('../models/cwatTicketModel');

module.exports = {
  get: {
    allRegistrars: async (req, res) => {
      const CwatRegistrars = await CwatRegistrar.find({});
      const allRegistrars = [...CwatRegistrars];

      res.status(200).send(allRegistrars);
    },
    getUserEvents: async (req, res) => {
      const { email } = req.params;
      const CwatRegistrars = await CwatRegistrar.find({});
      const allRegistrars = [...CwatRegistrars];

      const registeredEvents = allRegistrars.filter(registrar => registrar.email === email);

      res.status(200).send(registeredEvents);
    },
    viewAllCwatRegistrars: async (req, res) => {
      const cwatRegistrars = await CwatRegistrar.find({});
      res.status(200).send(cwatRegistrars);
    },
    findCwatRegistrarById: async (req, res) => {
      const cwatRegistrarById = await CwatRegistrar.findById(req.params.registrarId);

      res.status(200).send(cwatRegistrarById);
    },
    findCwatRegistrarByEmail: async (req, res, next) => {
      const cwatRegistrarByName = await CwatRegistrar.find({ email: req.body.email });

      if (cwatRegistrarByName) {
        next({ alreadyRegistered: true });
        return res.status(200).send(cwatRegistrarByName);
      } else {
        next({ alreadyRegistered: false });
        return res.status(404).send('cwat registrar not found');
      }
    },
  },

  post: {
    saveNewCwatRegistrar: async (req, res) => {
      const {
        email,
        emergencyEmail,
        emergencyPhone,
        emergencyFullName,
        firstname,
        lastname,
        phone,
        ticketPurchaseData,
        ticketOptionData,
        ticketOption,
      } = req.body;
      const registrar = req.body;
      const checkNameAgainst = firstname + ' ' + lastname;
      const [eFirstname, eLastname] = emergencyFullName.split(' ');

      const registrarHasUnregisteredTicket = await CwatUnregistered.findOne({
        $or: [{ firstname, lastname }, { firstname }],
      });
      if (registrarHasUnregisteredTicket && !ticketPurchaseData._id)
        return res.status(400).send('Please enter ticket code!');

      let cwatRegistrar = await CwatRegistrar.findOne({ email });
      if (cwatRegistrar)
        return res.status(400).send(`Registrar with email ${email} already registered.`);

      if (email === emergencyEmail)
        return res.status(400).send('Emergency Email must be different.');
      if (phone === emergencyPhone)
        return res.status(400).send('Emergency Phone must be different.');
      if (checkNameAgainst === emergencyFullName)
        return res.status(400).send('Emergency name must be different.');
      if ([firstname, lastname].includes(emergencyFullName))
        return res.status(400).send('Emergency Full Name must be different.');

      if (ticketOption && !ticketOptionData._id) {
        const cwatTicketData = await CwatTicket.findOne({ label: ticketOption });
        registrar.ticketOptionData = { ...cwatTicketData };

        await CwatTicket.downCountByOne(ticketOption);
      }

      cwatRegistrar = new CwatRegistrar({ ...registrar });

      await cwatRegistrar.save();
      res
        .status(200)
        .send(_.pick(cwatRegistrar, ['_id', 'firstname', 'lastname', 'email', 'ticketOptionData']));
    },
  },

  put: {
    updateCWATregistrarById: async (req, res) => {
      const updatedCWATregistrar = { ...req.body };

      const CWATregistrarToUpdate = await CwatRegistrar.findByIdAndUpdate(
        req.params.id,
        updatedCWATregistrar,
        {
          new: true,
        }
      );

      res.status(200).send(CWATregistrarToUpdate);
    },
  },

  delete: {
    deleteCWATregistrarById: async (req, res) => {
      const RegistrarToDelete = await CwatRegistrar.findByIdAndDelete(req.params.id);

      res.status(200).send(RegistrarToDelete);
    },
  },
};
