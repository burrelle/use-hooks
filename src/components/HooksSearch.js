import React, { useState, useEffect, useRef } from 'react';
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

/**
 * useFetch
 * @param {string} url - url to get
 * @param {function} dataToBeSet - function to set data returned from get request
 */
const useFetch = (url, dataToBeSet) => {
  const fetchData = async () => {
    const { data } = await axios.get(url);
    dataToBeSet(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
};

/**
 * useResults
 * @param {string} query - Query state
 * @param {function} setResults - Function to set results
 * @param {function} getInfo - Function to filter results
 * @param {array} searchable - Array to be searched
 */
const useResults = (query, setResults, getInfo, searchable) => {
  useEffect(() => {
    query && query.length >= 1
      ? setResults(getInfo(searchable, query))
      : setResults([]);
  }, [query]);
};

/**
 * getInfo
 * @param {array} searchable - Array to be searched
 * @param {string} wordToMatch - String to match against
 */
const getInfo = (searchable, wordToMatch) => {
  return searchable.filter(item => {
    const regex = new RegExp(wordToMatch, 'gi');
    return item.name.match(regex);
  });
};

export default function HooksSearch() {
  const [query, setQuery] = useState('');
  const [searchable, setSearchable] = useState([]);
  const [results, setResults] = useState([]);
  const queryRef = useRef(query);

  const url = 'https://api.punkapi.com/v2/beers';
  useFetch(url, setSearchable);
  useResults(query, setResults, getInfo, searchable);

  return (
    <div>
      <Form>
        <SearchIcon width="16" height="16" />
        <Input
          type="text"
          placeholder="Search for..."
          ref={queryRef}
          onChange={() => setQuery(queryRef.current.value)}
        />
      </Form>
      <Suggestions results={results} />
    </div>
  );
}
