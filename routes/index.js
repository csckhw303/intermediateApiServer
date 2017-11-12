var express = require('express');
var router = express.Router();
var courseCtrl = require('../controllers/course.server.controller')


/* POST New Note page. */
router.post('/newcourse', function(req, res) {
    return courseCtrl.create(req, res);
});

router.get('/allCourses', function(req, res) {
    return courseCtrl.allCourses(req, res);
});

router.post('/', function(req, res) {
    return courseCtrl.filterByTitle(req, res);
});

module.exports = router;
