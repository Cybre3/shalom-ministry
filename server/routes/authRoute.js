const router = require('express')();
const authController = require('../controllers/authController');
const utilsController = require('../controllers/utilsController');

router.get('/', authController.get.allUsers);
router.get('/:id', authController.get.getUserById);

router.post('/', authController.verifyUser, authController.post.authenticateUser);
// router.post('/verifyUser', authController.verifyUser, (req, res) => res.end());
router.post('/generateOTP', authController.verifyUser, authController.post.generateOTP, utilsController.post.sendSystemEmail);
router.post('/verifyOTP', authController.verifyUser, authController.post.verifyOTP);
router.post('/createResetSession', authController.verifyUser, authController.post.createResetSession);

router.put('/resetPassword', authController.verifyUser, authController.put.resetPassword, utilsController.post.sendSystemEmail)


module.exports = router;