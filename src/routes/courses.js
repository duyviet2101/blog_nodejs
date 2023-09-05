const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

//list of route
router.get('/:slug', courseController.show);


module.exports = router;
