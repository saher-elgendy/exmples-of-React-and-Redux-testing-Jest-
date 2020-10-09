import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { fetchData } from './redux/actions';
import Bag from './components/bag';
import Bookstore from './components/bookStore';


function App({ fetchData, data: { loading, error, books } }) {
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
        error ? error :
          !loading ? <Bookstore books={books} /> : '...loading books'
      }

    </div>
  );
}

const mapStateToProps = state => ({
  data: state.data,
});

export default connect(mapStateToProps, { fetchData })(App);
