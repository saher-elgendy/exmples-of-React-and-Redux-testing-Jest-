import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect'

describe('it should', () => {
  test('render App correctly', () => {
    const { container, getByText, getByTestId } = render(<App text="React Testing"></App>);
    //creating snapshot
    expect(container.firstChild).toMatchSnapshot();
    //check if header exist in the document
    const header = getByTestId(/header/);
    expect(header).toHaveTextContent('React Testing');
  })
})