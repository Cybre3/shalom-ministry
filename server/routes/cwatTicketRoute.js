const router = require('express')();
const validator = require('../middleware/validateMiddleware');
const { validate: validateCwatTicket } = require('../models/cwatTicketModel');
const cwatTicketController = require('../controllers/cwatTicketController');

router.get('/', cwatTicketController.get.getAllCwatTicketTypes);

router.post('/', validator(validateCwatTicket), cwatTicketController.post.saveCwatTicket);

module.exports = router;