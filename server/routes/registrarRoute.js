const router = require('express')();
const registrarController = require('../controllers/registrarController');
const utilsController = require('../controllers/utilsController');
const validator = require('../middleware/validateMiddleware');
const { validate: validateCwatRegistrar } = require('../models/cwatRegistrarModel');

router.get('/', registrarController.get.allRegistrars);
router.get('/:email', registrarController.get.getUserEvents);
router.get('/cwat-register/:registrarId', registrarController.get.findCwatRegistrarById);

router.post(
  '/cwat-register',
  validator(validateCwatRegistrar),
  registrarController.post.saveNewCwatRegistrar,
  utilsController.post.sendSystemEmail
);

router.put(
  '/cwat-register/:id',
  validator(validateCwatRegistrar),
  registrarController.put.updateCWATregistrarById
);

router.delete('/cwat-register/:id', registrarController.delete.deleteCWATregistrarById);

module.exports = router;
