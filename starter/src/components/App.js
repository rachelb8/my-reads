import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "../css/App.css";
import SearchBooks from "./SearchBooks";
import * as BooksAPI from "../utils/BooksAPI";
import ListBooks from "./ListBooks";

function App() {
  const [books, setBooks] = useState([]);
  const [searchedBooks, setSearchBooks] = useState([]);

  // Get all books on shelves currently
  useEffect(() => {
    const getBooks = async() => {
      const response = await BooksAPI.getAll();
      setBooks(response);
    };

    getBooks();
  }, [])

  // Update a book's shelf and replace it in list of current books with new information
  const changeShelf = (book, shelf) => {
    const update = async () => {
      BooksAPI.update(book, shelf);
      
      book.shelf = shelf
      const updatedBooks = books.filter(b => b.id !== book.id)
      setBooks(updatedBooks.concat(book));
    };

    update();
  };
  
  // Search for new books and only set searched books if a correct
  // response is given from the API or there was a valid query
  const searchBooks = (query) => {
    const search = async () => {
      const response = await BooksAPI.search(query);

      if(response && !response.error){
        setSearchBooks(response);
      } else {
        setSearchBooks([]);
      }
    };

    if(query && query.length > 0){
      search();
    } else {
      setSearchBooks([]);
    }
  };

  return (
    <div className="app">
      <Routes>
      <Route
        exact
        path="/"
        element={
          <ListBooks 
            books={books} 
            onChangeShelf={changeShelf}/>
        }
      />
      <Route
        path="/search"
        element={
          <SearchBooks books={books} searchedBooks={searchedBooks} onSearchBooks={searchBooks} onChangeShelf={changeShelf}/>
        }
      />
    </Routes>
    </div>
  );
}

export default App;
