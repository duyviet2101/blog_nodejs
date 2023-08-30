const Course = require('../models/Course');

class SiteController {
    // [GET]  /
    async index(req, res) {
        try {
            const result = await Course.find({});
            res.json(result);
            // res.render('home');
        } catch (error) {
            res.status(400).json({ error: 'error!!!!!!' });
        }
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
