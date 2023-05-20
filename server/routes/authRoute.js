const router = require('express')();
const authController = require('../controllers/authController');

router.get('/', authController.get.allUsers);

router.post('/', authController.post.authenticateUser);

module.exports = router;