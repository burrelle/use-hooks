import React from 'react';
import styled from 'styled-components';

const Results = styled.ul`
  list-style: none;
  padding: 1rem;
`;

const Beers = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: .5rem;
`

const Image = styled.img`
  margin-right: 1rem;
`

const Suggestions = ({ results }) => {
  return (
    <Results>
      {results.map((beer, i) => (
        <Beers key={i}>
          <Image src={beer.image_url} alt={beer.name} height="64" width="16" />
          {beer.name}
        </Beers>
      ))}
    </Results>
  );
};

export default Suggestions;
