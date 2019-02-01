import React from 'react';

const Suggestions = ({ results }) => {
  return (
    <ul>
      {results.map((beer, i) => (
        <li key={i}>{beer.name}</li>
      ))}
    </ul>
  );
};

export default Suggestions;
