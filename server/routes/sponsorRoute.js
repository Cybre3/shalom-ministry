const router = require('express')();
const sponsorController = require('../controllers/sponsorController');
const validator = require('../middleware/validateMiddleware');
const { validate: validateSponsor } = require('../models/sponsorModel');

router.get('/', sponsorController.get.allSponsors);

router.post('/', validator(validateSponsor), sponsorController.post.saveNewSponsor);

module.exports = router;