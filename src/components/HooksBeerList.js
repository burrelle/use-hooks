import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

export default function HooksBeerList() {
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    const { data } = await axios.get('https://api.punkapi.com/v2/beers');
    setBeers(data);
  };

  useEffect(() => {
    getBeers();
  }, []);

  return (
    <Fragment>
      {beers.length > 0 &&
        beers.map(({ id, name }) => <div key={id}>{name}</div>)}
    </Fragment>
  );
}
