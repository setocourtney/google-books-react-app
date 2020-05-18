const API_KEY = require("../config/config").GOOGLE_BOOKS_API_KEY;

const URL = "https://www.googleapis.com/books/v1/volumes?fields=items(id, volumeInfo(title, authors, description, publishedDate, pageCount, previewLink, imageLinks/thumbnail))&";
const axios = require("axios");


module.exports = {
    searchBooks: function(req, res) {
        console.log(req.query);
        const searchTerm = req.query.q.replace(/\s/g, "+");
        const search = `${ URL }key=${ API_KEY }&q=${ searchTerm }`;
        axios.get(search)
            .then(result => res.json(result.data))
            .catch(err => res.status(422).json(err));
}
}