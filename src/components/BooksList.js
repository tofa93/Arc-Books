import React from 'react';
import 'react-multi-carousel/lib/styles.css';
// import Carousel from 'react-multi-carousel';


const BooksList = ({ books, modalBtn, addToBookshelf }) => {

    return (
        <div>
            <div className="books-track">
                {books.items.map((book) => (
                    <div className="book-entity" key={book.id}>
                        <button
                            className="book-btn"
                            onClick={() => modalBtn(book)}
                            title={book.volumeInfo.title + '\n' + book.volumeInfo.authors}
                        >
                            <div className="book-cover">
                                {book.volumeInfo.imageLinks ? (
                                    <img
                                        src={book.volumeInfo.imageLinks.thumbnail}
                                        alt="book-cover"
                                        className="book-cover-img"
                                    />
                                ) : (
                                    <div className="cover-unavailable-info">Book cover is unavailable</div>
                                )}
                            </div>
                        </button>
                        <button className="add-to-cart-btn" onClick={() => addToBookshelf(book)}>Add to bookshelf</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BooksList;
