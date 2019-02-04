import React, { Component, Fragment } from 'react';
import axios from 'axios';

class BeerList extends Component {
  constructor(props) {
    super(props);
    this.state = { beers: {} };
  }

  async componentDidMount() {
    const { data } = await axios.get('https://api.punkapi.com/v2/beers');
    this.setState({ beers: data });
  }

  render() {
    return (
      <Fragment>
        {this.state.beers.length > 0 &&
          this.state.beers.map(({ id, name }) => <div key={id}>{name}</div>)}
      </Fragment>
    );
  }
}

export default BeerList;
