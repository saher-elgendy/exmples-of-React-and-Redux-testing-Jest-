import React from 'react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from './test-utils';


//Testing App Component
describe('App', () => {
  const { getByText, getByTestId, queryByText } = screen;

  let initialState = {
    data: {
      books: [],
      error: '',
      loading: false
    },
    bag: []
  }

  it('should render App correctly with given redux state', () => {
    const { container } = render(<App />, initialState);
    //creatin App component snapshot
    expect(container.firstChild).toMatchSnapshot();
    //test if header exist in the document with the right text
    expect(getByTestId(/header/)).toHaveTextContent('React Testing');
    //when loading is false, remove loading message or don't show it
    expect(queryByText(/...loading books/)).not.toBeInTheDocument()
  });
  //the App should display a loading message before data get fetched
  it('displays loading message before data get fetched', () => {
    initialState = {
      ...initialState,
      data: {
        ...initialState.data,
        loading: true
      }
    }
    render(<App />, initialState);
    expect(queryByText(/...loading books/)).toBeInTheDocument();
  });

  //The App should display an error message if something went wrong while fetching data
  it('display an error message if any thing wrong happened while fetching data', () => {
    initialState = {
      ...initialState,
      data: {
        ...initialState.data,
        error: 'something went wrong'
      }
    }
    render(<App />, initialState);
    expect(getByText(/something went wrong/)).toBeInTheDocument();
  })
})