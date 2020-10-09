import React from 'react'
import { addBookToBag, removeBookFromBag } from '../redux/actions';
import { connect } from 'react-redux'


const BookCardButton = ({ bag, book, addBookToBag, removeBookFromBag }) => {
    const index = bag.findIndex(b => b.cover === book.cover);

    const addToBagBtn = <button
        onClick={() => addBookToBag(book)}
        className="book-card-btn add-book-btn">
        ADD TO BAG
    </button>

    const removeFromBagBtn = <button
        onClick={() => removeBookFromBag(book)}
        className="book-card-btn remove-book-btn"
    >
        REMOVE FROM BAG
    </button>

    return (
        index < 0 ? addToBagBtn : removeFromBagBtn
    )
}

const mapStateToProps = state => ({
    bag: state.bag
});

export default connect(mapStateToProps, {addBookToBag, removeBookFromBag})(BookCardButton)
