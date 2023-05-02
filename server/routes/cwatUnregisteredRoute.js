const router = require('express')();
const validator = require('../middleware/validateMiddleware');
const { validate: validateCwatUnregistered } = require('../models/cwatUnregisteredModel');
const cwatUnregisteredController = require('../controllers/cwatUnregisteredController');

router.get('/', cwatUnregisteredController.get.getAllCwatUnregistered);
router.get('/:ticketCode', cwatUnregisteredController.get.getUnregisteredByTicketCode);

module.exports = router;
