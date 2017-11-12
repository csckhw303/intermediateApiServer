var Course = require('../models/course.server.model.js');

exports.allCourses = function(req, res) {

    var query = Course.find();

    query.sort({ title: 'desc' }).exec(function(err, results) {
        res.send(results);
    });
};

exports.filterByTitle = function(req, res) {
    var query = Course.find();
    var filter = req.body.title;

    query.sort({title: 'desc'});

    if (filter.length > 0)
    {
        query.where({ title: filter})
    }

    query.exec(function(err, results) {
        res.send(results);
    });
}

exports.create = function(req, res) {
    var entry = new Course({
        id: req.body.id,
        category: req.body.category,
        length: req.body.length,
        authorId: req.body.authorId,
        watchHref: req.body.watchHref,
        title:req.body.title
    });

    entry.save(function(err) {
            if (err) {
              console.log(err);
              throw err;
            }
        console.log('course saved: ', entry);
      });

    res.send({saved: true});
    // Redirect to the home page to display list of notes...
};


