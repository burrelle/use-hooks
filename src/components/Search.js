import React, { Component } from 'react';
import axios from 'axios';
import Suggestions from './Suggestions';

class Search extends Component {
  state = {
    searchable: [],
    query: '',
    results: []
  };

  async componentDidMount() {
    const { data } = await axios.get('https://api.punkapi.com/v2/beers');
    const names = data.map(({ name }) => name);
    this.setState({ searchable: names });
  }

  getInfo = wordToMatch => {
    return this.state.searchable.filter(beer => {
      const regex = new RegExp(wordToMatch, 'gi');
      return beer.match(regex);
    });
  };

  handleInputChange = () => {
    this.setState({ query: this.search.value }, () => {
      this.state.query && this.state.query.length >= 1
        ? this.setState({ results: this.getInfo(this.state.query) })
        : this.setState({ results: [] });
    });
  };

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    );
  }
}

export default Search;
