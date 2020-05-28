import React, { useState, useEffect } from "react";
// import SearchBar from "../components/SearchBar";
import ResultsContainer from "../components/ResultsContainer"
import BookCard from "../components/BookCard";
import { getSaved, removeBook } from "../utils/API/API";
import M from 'materialize-css/dist/js/materialize.min.js';

const Saved = () => {
    const [books, setBooks] = useState([]);
    // const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        loadBooks();
    }, []);

    const loadBooks = () => {
        getSaved()
        .then(res => {
            setBooks(res.data);
        })
        .catch(err => console.log(err.responses));
    }

    const deleteBook = (id) => {
        removeBook(id)
        .then(res => {
            loadBooks();
            M.toast({html: `Book has been removed`});
        })
        .catch(err => console.log(err.response));
    };

    // const updateSearch = (event) => {
    //     setSearchTerm(event.target.value);
    // }

    // const handleSearch = (event) => {
    //     event.preventDefault();
    //     if (searchTerm) {
    //         loadBooks();
    //     }
    // }

    return (
        <div>
            {/* <SearchBar handleInputChange={updateSearch} handleSubmit={handleSearch}/> */}
            <ResultsContainer>
                { books.length > 0 ? (
                    books.map(book => { 
                        return <BookCard key={book._id} saved={true} book={ book } handleSubmit={() => deleteBook(book._id)}/>
                    })) : <div className="row center-align" style={{ padding: "25px", width: "100%" }}>You have not saved any books!</div>
                }
            </ResultsContainer>
        </div>
    )
}

export default Saved;