const Router = require('express')();
const invoiceController = require('../controllers/invoiceController');


Router.get('/', invoiceController.get.viewAllInvoices);
Router.get('/:id', invoiceController.get.findInvoiceById);

Router.post('/', invoiceController.post.createNewInvoice);

Router.put('/:id', invoiceController.put.editInvoiceById);

Router.delete('/:id', invoiceController.delete.deleteInvoiceById);

module.exports = Router;