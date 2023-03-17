const router = require('express')();
const contactController = require('../controllers/contactController');
const validator = require('../middleware/validateMiddleware');
const { validate: validateContact } = require('../models/contactModel');


router.post('/', validator(validateContact), contactController.post.saveNewContactMessage);

module.exports = router;
