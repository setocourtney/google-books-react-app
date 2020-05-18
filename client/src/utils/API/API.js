import axios from 'axios';

// get all saved books
export const getSaved = () => {
    return axios.get('/api/saved');
}

// remove book with matching id from db
export const removeBook = (id) => {
    return axios.delete('/api/saved/' + id);
}

// save book obj to db
export const saveBook = (bookObj) => {
    return axios.post('/api/saved', bookObj);
}

// getBooks retrieves books from server
// accepts query or term to search google books api 
export const getBooks= (search) => {
    return axios.get('/api/books', { params : { q: search }});
}

