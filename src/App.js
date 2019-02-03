import React, { Component } from 'react';
import styled from 'styled-components';
import HooksSearch from './components/HooksSearch';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

class App extends Component {
  render() {
    return (
      <Wrapper>
        <HooksSearch />
      </Wrapper>
    );
  }
}

export default App;
