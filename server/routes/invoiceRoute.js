const router = require('express')();
const invoiceController = require('../controllers/invoiceController');
const validator = require('../middleware/validateMiddleware');
const { validate: validateInvoice } = require('../models/InvoiceModel');

router.get('/', invoiceController.get.viewAllInvoices);
router.get('/:invoiceId', invoiceController.get.findInvoiceById);

router.post('/', validator(validateInvoice), invoiceController.post.createNewInvoice);

router.put('/:id', validator(validateInvoice), invoiceController.put.updateInvoiceById);

router.delete('/:id', invoiceController.delete.deleteInvoiceById);

module.exports = router;
