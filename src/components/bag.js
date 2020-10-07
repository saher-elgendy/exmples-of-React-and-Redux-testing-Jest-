import React from 'react';
import bagIcon from './../static/icon.png'

const Bag = () => {
    return (
        <div className="bag">
            <div className="bag-container">
                <span className="book-count">3</span>
                <img src={bagIcon} alt="bag" />
            </div>

        </div>
    )
}

export default Bag;
