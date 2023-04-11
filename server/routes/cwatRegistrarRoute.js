const router = require('express')();
const cwatRegistrarController = require('../controllers/cwatRegistrarController');
const validator = require('../middleware/validateMiddleware');
const { validate: validateCwatRegistrar } = require('../models/cwatRegistrarModel');

router.get('/', cwatRegistrarController.get.viewAllCwatRegistrars);
// Router.get('/:id', invoiceController.get.findInvoiceById);

router.post('/', validator(validateCwatRegistrar), cwatRegistrarController.post.createNewCwatRegistrar);

/* Router.put('/:id', invoiceController.put.editInvoiceById);

Router.delete('/:id', invoiceController.delete.deleteInvoiceById); */

module.exports = router;
