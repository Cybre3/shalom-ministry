const router = require('express')();
const emailController = require('../controllers/emailController');
const utilsController = require('../controllers/utilsController');
const validator = require('../middleware/validateMiddleware');
const { validate: validateEmail } = require('../models/emailModel');


router.get('/', emailController.get.allEmails);

router.post('/blast', utilsController.post.sendEmailBlast);
router.post('/', validator(validateEmail), emailController.post.addNewEmail);

router.delete('/:id', emailController.delete.removeEmail)

module.exports = router;