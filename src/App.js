import React, { Component } from 'react';
import BeerList from './components/BeerList';
import HooksSearch from './components/HooksSearch';

class App extends Component {
  render() {
    return (
      <div>
        <BeerList />
        <HooksSearch />
      </div>
    );
  }
}

export default App;
