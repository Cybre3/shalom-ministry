const router = require('express')();
const { User } = require('../models/userModel');
const authController = require('../controllers/authController');

router.post('/', authController.post.authenticateUser);

module.exports = router;

