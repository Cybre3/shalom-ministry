const router = require('express')();
const userController = require('../controllers/userController');
const validator = require('../middleware/validateMiddleware');
const { validate: validateUser } = require('../models/userModel');

router.post('/', validator(validateUser), userController.post.addNewUser);

module.exports = router;