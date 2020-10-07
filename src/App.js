import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { fetchData } from './redux/actions';
import BookShelf from './components/bookShelf';
import Bag from './components/bag';


function App({ fetchData, data: { loading, errors, books } }) {
  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className="App">
      <header data-testid="header">
        <h2>React Testing</h2>
        <Bag />
      </header>
      {
        !loading ? <BookShelf books={books} /> : '...loading books'
      }
    </div>
  );
}

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps, { fetchData })(App);
