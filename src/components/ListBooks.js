import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Bookshelf from "./Bookshelf";

const ListBooks = ({books, onChangeShelf}) => {
    const bookshelves = [
        { value: 'currentlyReading', title: 'Currently Reading' },
        { value: 'wantToRead', title: 'Want to Read' },
        { value: 'read', title: 'Read' }
    ];

    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
                {bookshelves.map(shelf => (
                <Bookshelf
                    key={shelf.value}
                    shelf={shelf}
                    books={books}
                    onChangeShelf={onChangeShelf}
                />
                ))}
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">
              Add a book
            </Link>
          </div>
        </div>
    );
};

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default ListBooks;