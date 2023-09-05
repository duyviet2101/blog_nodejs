const Course = require('../models/Course');
const {
    mutipleMongooseToObject,
    mongooseToObject,
} = require('../../util/mongoose');

class SiteController {
    // [GET]  /
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }

    // [POST] /search
    postSearch(req, res) {
        console.log(req.body)
    }
}

module.exports = new SiteController();
