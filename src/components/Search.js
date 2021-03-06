import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import Suggestions from './Suggestions';

const Input = styled.input`
  width: 28rem;
  padding: .5rem;
  border-style: none;
  outline: none;
  margin-left: 0.25rem;
  font-size: 1rem;
  border-radius: .5rem;
`;

class Search extends Component {
  state = {
    query: '',
    searchable: [],
    results: []
  };

  componentDidMount() {
    axios.get('https://api.punkapi.com/v2/beers').then(({ data }) => {
      this.setState({ searchable: data });
    });
  }

  getInfo = wordToMatch => {
    return this.state.searchable.filter(item => {
      const regex = new RegExp(wordToMatch, 'gi');
      return item.name.match(regex);
    });
  };

  handleInputChange = e => {
    this.setState({ query: e.target.value }, () => {
      this.state.query && this.state.query.length >= 1
        ? this.setState({ results: this.getInfo(this.state.query) })
        : this.setState({ results: [] });
    });
  };

  render() {
    return (
      <form>
        <Input
          placeholder="Search for..."
          value={this.state.query}
          onChange={this.handleInputChange}
        />
        {this.state.results.length > 0 && <Suggestions results={this.state.results} />}
      </form>
    );
  }
}

export default Search;
