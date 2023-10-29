const { Invoice, validate } = require('../models/InvoiceModel');

module.exports = {
  get: {
    viewAllInvoices: async (req, res) => {
      const allInvoices = await Invoice.find({});
      res.status(200).send(allInvoices);
    },
    findInvoiceById: async (req, res) => {
      const invoiceById = await Invoice.findById(req.params.invoiceId);

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
    updateInvoiceById: async (req, res) => {
      const updatedInvoice = { ...req.body };

      const invoiceToUpdate = await Invoice.findByIdAndUpdate(req.params.invoiceId, updatedInvoice, {
        new: true,
      });

      res.status(200).send(invoiceToUpdate);
    },
  },

  delete: {
    deleteInvoiceById: async (req, res) => {
      const invoiceToDelete = await Invoice.findByIdAndDelete(req.params.invoiceId);

      res.status(200).send(invoiceToDelete);
    },
  },
};
