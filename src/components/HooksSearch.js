import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Suggestions from './Suggestions';

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
      <form>
        <input
          type="text"
          placeholder="Search for..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </form>
      <Suggestions results={results} />
    </div>
  );
}
