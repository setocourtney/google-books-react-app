// Schema for saved books
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    volumeId: {
        type: String
    },
    title: {
        type: String
    },
    authors: {
        type: Array
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    link: {
        type: String
    },
    pageCount: {
        type: Number
    },
    publishedDate: {
        type: String
    }
});

const Book = mongoose.model("Books", BookSchema);

module.exports = Book;