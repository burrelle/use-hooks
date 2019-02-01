import React from 'react';

const Suggestions = props => {
  const options = props.results.map((name, i) => <li key={i}>{name}</li>);
  return <ul>{options}</ul>;
};

export default Suggestions;
