import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Suggestions from './Suggestions';
import SearchIcon from './SearchIcon';

const Input = styled.input`
  width: 28rem;
  padding: 1rem;
  border-style: none;
  outline: none;
  margin-left: 0.25rem;
  font-size: 1rem;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  border: 1px solid grey;
  padding: 0 1rem;
  border-radius: 1rem;
`;

export default function HooksSearch() {
  const [query, setQuery] = useState('');
  const [searchable, setSearchable] = useState([]);
  const [results, setResults] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get('https://api.punkapi.com/v2/beers');
    setSearchable(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getInfo = wordToMatch => {
    return searchable.filter(item => {
      const regex = new RegExp(wordToMatch, 'gi');
      return item.name.match(regex);
    });
  };

  useEffect(() => {
    query && query.length >= 1 ? setResults(getInfo(query)) : setResults([]);
  }, [query]);

  return (
    <div>
      <Form>
        <SearchIcon width="16" height="16" />
        <Input
          type="text"
          placeholder="Search for..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </Form>
      <Suggestions results={results} />
    </div>
  );
}
