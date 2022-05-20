import { useState } from "react";
import PropTypes from "prop-types";

const ChangeBookshelf = ({book, shelfValue, onChangeShelf}) => {
    const [shelf, setShelf] = useState(shelfValue);

    const updateShelf= ((newShelf) => {
        setShelf(newShelf);
        onChangeShelf(book, newShelf);
    })
  
    return (
        <div className="book-shelf-changer">
            <select value={shelf} onChange={(event) => updateShelf(event.target.value)}>
                <option value="undefined" disabled>
                    Move to...
                </option>
                <option value="currentlyReading">
                    Currently Reading
                </option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    );
    
};

ChangeBookshelf.propTypes = {
    book: PropTypes.object.isRequired,
    shelfValue: PropTypes.string.isRequired, 
    onChangeShelf: PropTypes.func.isRequired,
};

export default ChangeBookshelf;