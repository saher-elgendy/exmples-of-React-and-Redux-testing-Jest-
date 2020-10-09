import React from 'react';
import BookCardButton from './bookCardButton';


const BookCard = ({ book }) => {
    return (
        <li className="book-card">
            <img src={book.cover} alt="book" className="book-cover" />
            <h4>{book.name}</h4>
            <h4>Author: <span style={{ fontWeight: 'normal' }}>{book.author}</span></h4>
            <h4>Page Count: <span style={{ fontWeight: 'normal' }}>{book.pagesNumber}</span></h4>
            <BookCardButton book={book} />
        </li>
    )
}

export default BookCard;
