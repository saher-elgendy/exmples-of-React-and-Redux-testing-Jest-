import React from 'react';
import Bag from '../components/bag';
import '@testing-library/jest-dom/extend-expect'
import { render } from './test-utils'
import { fireEvent, screen } from '@testing-library/react'

describe('bag', () => {
    // const {getByTestId} = screen
    let state = {
        bag: [],
    }


    it('render correctly when the use click the bag icon', () => {
        const { container } = render(<Bag />, state);
        expect(container.firstChild).toMatchSnapshot();

        fireEvent.click(screen.getByTestId(/bag-image/));
        expect(screen.getByTestId(/bag-content/)).toBeInTheDocument()
    });

    it('show a message if no books found in the bag', () => {
        render(<Bag />, state);
        fireEvent.click(screen.getByTestId(/bag-image/));
        expect(screen.queryByText(/No books/)).toBeInTheDocument()
    })

    it('show a list of books if books exist', () => {
        state = {
            bag: [
                {
                    name: 'Power of your subconscious mind',
                    author: 'Joseph Murphy',
                    cover: 'https://images-na.ssl-images-amazon.com/images/I/81MArWaiw1L.jpg'
                },
                {
                    name: 'The Secret',
                    author: 'Ronda Bayrne'
                }
            ]
        };

        render(<Bag />, state);
        fireEvent.click(screen.getByTestId(/bag-image/));
        //message 'No books found' shouldn't exist any more
        expect(screen.queryByText(/No books/)).not.toBeInTheDocument();
        expect(screen.getByText(/Power/)).toBeInTheDocument();
        expect(screen.getByText(/Secret/)).toBeInTheDocument();
        // expect(screen.getByAltText(/book_cover/)).toBeInTheDocument()
    })

    it('shows the correct books count in the bag', () => {
        //render bag with two books, the count should be 2
        state = {
            bag: [
                {
                    name: 'Power of your subconscious mind',
                    author: 'Joseph Murphy'
                },
                {
                    name: 'The Secret',
                    author: 'Ronda Bayrne'
                }
            ]
        }
        render(<Bag />, state);
        expect(screen.getByTestId(/books-count/)).toHaveTextContent('2');
    })
});