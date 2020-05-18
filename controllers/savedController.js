
const db = require('../models');

module.exports = {
    findAll: function(req, res) {
        db.Book.find(req.query)
          .then(data => res.json(data))
          .catch(err => res.status(422).json(err));
    },
    addOne: function(req, res) {
        const newBook = new db.Book(req.body);
        newBook.save()
            .then(data => res.json(data))
            .catch(err => {res.status(422).json(err)});
    },
    deleteOne: function(req, res) {
        db.Book.findById({ _id: req.params.id })
            .then(found => found.remove())
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    }
}