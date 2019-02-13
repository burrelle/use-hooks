import React from 'react';
import styled from 'styled-components';

const Results = styled.ul`
  list-style: none;
  padding: 1rem;
  background: whitesmoke;
  color: black;
  border-radius: 1rem;
`;

const Beers = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Image = styled.img`
  margin-right: 1rem;
`;

const Suggestions = ({ results }) => {
  return (
    <Results>
      {results.map(({ image_url, name }, i) => (
        <Beers key={i}>
          <Image src={image_url} alt={name} height="64" width="16" />
          {name}
        </Beers>
      ))}
    </Results>
  );
};

export default Suggestions;
