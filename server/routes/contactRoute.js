const Router = require('express')();
const contactController = require('../controllers/contactController');
const validator = require('../middleware/validateMiddleware');
const { validate: validateContact } = require('../models/contactModel');

Router.get('/', contactController.get.getAllContactMessages);

Router.post('/', validator(validateContact), contactController.post.saveNewContactMessage);

module.exports = Router;
