import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import ResultsContainer from "../components/ResultsContainer"
import BookCard from "../components/BookCard";
import { getBooks, saveBook } from "../utils/API/API";
import useDebounce from "../utils/debounceHook";
import M from 'materialize-css/dist/js/materialize.min.js';

const Search = () => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("jane eyre");
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        if (!searchTerm) {
            return;
        }
        if (debouncedSearchTerm) {
            loadBooks();
        }
    }, [debouncedSearchTerm]);

    const loadBooks = () => {
        getBooks(searchTerm)
            .then(res => {
                if (res.data.items) {
                    setBooks(res.data.items);
                } else {
                    setBooks([]);
                }
            })
            .catch(err => {
                setBooks([]);
            });
    }

    const addBook = (newBook) => {
        saveBook(newBook)
            .then(res => {
                M.toast({html: `${newBook.title} has been saved`});
            })
            .catch(err => console.log(err.response));
    };

    const updateSearch = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSearch = (event) => {
        event.preventDefault();
    }


    return (
        <div>
            <SearchBar handleInputChange={updateSearch} handleSubmit={handleSearch}/>
            <ResultsContainer>
                { books.length > 0 ? (
                    books.map(book => { 
                        const bookInfo = {
                            title: book.volumeInfo.title ? book.volumeInfo.title : "unknown",
                            authors: book.volumeInfo.authors ? book.volumeInfo.authors : "unknown",
                            description: book.volumeInfo.description ? book.volumeInfo.description.substring(0, 325) + "...": "...",
                            publishedDate: book.volumeInfo.publishedDate ? book.volumeInfo.publishedDate.substring(0,4): "unknown",
                            pageCount: book.volumeInfo.pageCount ? book.volumeInfo.pageCount : "unknown",
                            link: book.volumeInfo.previewLink,
                            image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ""
                        }
                        return <BookCard key={book.id} saved={false} book={ bookInfo } handleSubmit={ () => addBook(bookInfo) }/>
                    })) : <div className="row center-align" style={{ padding: "25px", width: "100%" }}>No books found... try another search</div>
                }
            </ResultsContainer>
        </div>
    )
}

export default Search;