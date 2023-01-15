const { Invoice, validate } = require('../models/InvoiceModel');

module.exports = {
  get: {
    viewAllInvoices: (req, res) => {
      const allInvoices = Invoice.find({});
      res.status(200).send('allInvoices');
    },
    findInvoiceById: async (req, res) => {
      const invoiceById = await Invoice.findById(req.params.id);

      res.status(200).send(invoiceById);
    },
  },

  post: {
    createNewInvoice: async (req, res) => {
      const { firstName, lastName, email, phoneNumber, invoiceNumber, date, total, paymentApplied, description, quantity, unitPrice } = validate(req.body);
      const billTo = {
        firstName,
        lastName,
        email,
        phoneNumber
      }
      const newInvoice = {
        billTo,
        invoiceNumber,
        date,
        total,
        paymentApplied,
        description,
        quantity,
        unitPrice
      };

      await newInvoice.save();

      res.status(200).send(newInvoice);
    },
  },

  put: {
    editInvoiceById: async (req, res) => {
      const { value } = validate(req.body);
      const updatedInvoice = {};

      const invoiceToEdit = await Invoice.findByIdAndUpdate(req.params.id, updatedInvoice, {
        new: true,
      });

      res.status(200).send(invoiceToEdit);
    },
  },

  delete: {
    deleteInvoiceById: async (req, res) => {
      const invoiceToDelete = await Invoice.findByIdAndDelete(req.params.id);

      res.status(200).send(invoiceToDelete);
    },
  },
};
