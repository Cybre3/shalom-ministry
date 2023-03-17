const router = require('express')();
const messagesController = require('../controllers/messagesController');

router
  .get('/', messagesController.get.viewAllMessages)

module.exports = router;
