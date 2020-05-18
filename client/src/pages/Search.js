import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import ResultsContainer from "../components/ResultsContainer"
import BookCard from "../components/BookCard";
import { getBooks, saveBook } from "../utils/API/API";

const Search = () => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("jane eyre");

    useEffect(() => {
        loadBooks();
    }, []);

    const loadBooks = () => {
        getBooks(searchTerm)
            .then(res => {
                setBooks(res.data.items);
            })
            .catch(err => console.log(err.response));
    }

    const addBook = (newBook) => {
        saveBook(newBook)
            .then(res => console.log("Book Added"))
            .catch(err => console.log(err.response));
    };

    const updateSearch = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSearch = (event) => {
        event.preventDefault();
        if (searchTerm) {
            loadBooks();
        }
    }


    return (
        <div>
            <SearchBar handleInputChange={updateSearch} handleSubmit={handleSearch}/>
            <ResultsContainer>
                { books.length > 0 ? (
                    books.map(book => { 
                        const bookInfo = {
                            title: book.volumeInfo.title,
                            authors: book.volumeInfo.authors,
                            description: book.volumeInfo.description,
                            publishedDate: book.volumeInfo.publishedDate.substring(0,4),
                            pageCount: book.volumeInfo.pageCount,
                            link: book.volumeInfo.previewLink,
                            image: book.volumeInfo.imageLinks.thumbnail
                        }
                        return <BookCard key={book.id} saved={false} book={ bookInfo } handleSubmit={ () => addBook(bookInfo) }/>
                    })) : "No Books Found"
                }
            </ResultsContainer>
        </div>
    )
}

export default Search;