import React, { Component } from 'react';
import BeerList from './components/BeerList'
import HooksBeerList from './components/HooksBeerList';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <div>
        <BeerList />
        <HooksBeerList />
        <Search />
      </div>
    );
  }
}

export default App;
