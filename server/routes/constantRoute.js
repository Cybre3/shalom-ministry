const router = require('express')();
const constantController = require('../controllers/constantController');

router.get('/:type', constantController.get.getConstantByType);


module.exports = router;