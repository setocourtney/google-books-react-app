import axios from 'axios';

// get all saved books
export const getBooks= () => {
    return axios.get('/api/books/');
}

// remove book with matching id from db
export const removeBook = (id) => {
    return axios.delete('/api/books/' + id);
}

// save book obj to db
export const saveBook = (bookObj) => {
    return axios.post('/api/books/', bookObj);
}
