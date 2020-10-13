import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);


//creating a custom render function so we can wrap our App with
//react-redux provider
const render = (ui, initialState) => {
  const store = mockStore(initialState);
  //App wrapper and mocked store passed to it
  const Wrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }