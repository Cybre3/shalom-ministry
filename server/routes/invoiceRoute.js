const Router = require('express')();
const invoiceController = require('../controllers/invoiceController');
const validator = require('../middleware/validateMiddleware');
const { validate: validateInvoice } = require('../models/InvoiceModel');


Router.get('/', invoiceController.get.viewAllInvoices);
Router.get('/:id', invoiceController.get.findInvoiceById);

Router.post('/', validator(validateInvoice), invoiceController.post.createNewInvoice);

Router.put('/:id', invoiceController.put.editInvoiceById);

Router.delete('/:id', invoiceController.delete.deleteInvoiceById);

module.exports = Router;