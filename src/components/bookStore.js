import React from 'react'
import BookCard from './bookCard';
import { connect } from 'react-redux';


const BookStore = ({ books }) => {
    return (
        <div className="book-store">
            <ul className="books-list">
                {
                    books.map((book, i) => {
                        return (
                            <BookCard key={i} book={book} />
                        )
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    books: state.data.books
});

export default connect(mapStateToProps)(BookStore);
