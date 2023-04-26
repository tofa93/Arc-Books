import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../context/CartContext";
import '../styles/bookshelf.css'
const Cart = () => {

    const { cartItems } = useContext(CartContext);
    const { removeItem } = useContext(CartContext);
    const { clearBookshelf } = useContext(CartContext);

    const handleDelete = (item) => {
        removeItem(item);
    }
    const handleClear = () => {
        clearBookshelf();
    }

    return (
        <div className="content-bookshelf">
            <div className="back-btn">
                <NavLink to="/" exact className="back-to-bookstore-btn">
                    <span className="material-symbols-outlined btn-icon">home</span>
                    <span className="back-btn-text">Homepage</span>
                </NavLink>
            </div>
            {cartItems.length > 0 ?
                <div className="bookshelf">
                    <div className="bookshelf-header">
                        <h2 className="bookshelf-header-title">Your bookshelf</h2>
                        <button className="clear-shelf-btn" onClick={() => handleClear()}>
                            <span className="material-symbols-outlined btn-icon">clear_all</span>
                            <span className="clear-btn-text">Clear bookshelf</span>
                        </button>
                    </div>
                    <div className="book-shelves">
                        {cartItems.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <button className="remove-item-btn" onClick={() => handleDelete(item)}>
                                    <span className="material-symbols-outlined">delete</span>
                                </button>
                                <div className="cart-book">
                                    <div className="cart-book-cover">
                                        <img src={item.volumeInfo.imageLinks.thumbnail}
                                            alt="book-cover"
                                            className="cart-book-cover-img" />
                                    </div>
                                    <span className="cart-book-title">{item.volumeInfo.title}</span>
                                    <a href={item.volumeInfo.previewLink} className="cart-read-btn">Read this book</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> :
                <div className={"bookshelf-info"}>No books on your shelf yet</div>
            }
        </div>
    );
}

export default Cart;
