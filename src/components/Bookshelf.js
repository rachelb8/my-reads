import PropTypes from "prop-types";
import BooksGrid from "./BooksGrid";


const Bookshelf = ({books, shelf, onChangeShelf}) => {
    const booksOnShelf = books.filter(book => book.shelf === shelf.value);
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf.title}</h2>
            <div className="bookshelf-books">
                <BooksGrid books={booksOnShelf} onChangeShelf={onChangeShelf} />
            </div>
        </div>
    );
};

Bookshelf.propTypes = {
    books: PropTypes.array.isRequired,
    shelf: PropTypes.object.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
};

export default Bookshelf;