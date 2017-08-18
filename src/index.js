import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAOn5mEUdCm3z6JYhKMUfrl3on3MGE6A-8';

const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  );
};

ReactDOM.render(<App/>, document.querySelector('.container'));