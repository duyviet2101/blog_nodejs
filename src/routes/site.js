const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');
const { route } = require('./courses');

router.get('/search', siteController.search);
router.post('/search', siteController.postSearch);
router.get('/', siteController.index);

module.exports = router;
