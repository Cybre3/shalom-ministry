const router = require('express')();
const messagesController = require('../controllers/messagesController');

router
  .get('/', messagesController.get.viewAllMessages)

router.delete('/:id/:category', messagesController.delete.deleteMessageById);

module.exports = router;
