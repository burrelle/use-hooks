import React, { Component } from 'react';
import axios from 'axios';
import Suggestions from './Suggestions';

class Search extends Component {
  state = {
    query: '',
    searchable: [],
    results: [],
  };

  async componentDidMount() {
    const { data } = await axios.get('https://api.punkapi.com/v2/beers');
    this.setState({ searchable: data });
  }

  getInfo = wordToMatch => {
    return this.state.searchable.filter(item => {
      const regex = new RegExp(wordToMatch, 'gi');
      return item.name.match(regex);
    });
  };

  handleInputChange = (e) => {
    this.setState({ query: e.target.value }, () => {
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
          value={this.state.query}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    );
  }
}

export default Search;
