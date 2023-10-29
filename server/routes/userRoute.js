const router = require('express')();
const userController = require('../controllers/userController');
const utilsController = require('../controllers/utilsController');
const validator = require('../middleware/validateMiddleware');
const { validate: validateUser } = require('../models/userModel');

router.get('/', userController.get.allUsers)

router.post('/', validator(validateUser), userController.post.addNewUser, utilsController.post.sendSystemEmail);

router.put('/:id', userController.put.updateUserById)

module.exports = router;