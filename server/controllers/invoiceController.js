const { Invoice, validate } = require('../models/InvoiceModel');

module.exports = {
  get: {
    viewAllInvoices: async (req, res) => {
      const allInvoices = await Invoice.find({});
      res.status(200).send(allInvoices);
    },
    findInvoiceById: async (req, res) => {
      const invoiceById = await Invoice.findById(req.params.id);

      res.status(200).send(invoiceById);
    },
  },

  post: {
    createNewInvoice: async (req, res) => {
      const {
        firstname,
        lastname,
        email,
        phone,
        invoiceNumber,
        currentDate,
        total,
        paymentApplied,
        description,
        qty,
        unitPrice,
        comments,
      } = validate(req.body).value;

      const newInvoice = new Invoice({
        firstname,
        lastname,
        email,
        phone,
        invoiceNumber,
        currentDate,
        total,
        paymentApplied,
        description,
        qty,
        unitPrice,
        comments,
      });
      const result = await newInvoice.save();

      res.status(200).send(result);
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
