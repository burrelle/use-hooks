import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Row = styled.div`
  flex-direction: row;
  height: 100vh;
  padding-top: 2rem;
`

export const ThemeButton = styled.button`
  background: transparent;
  border-radius: 9999px;
  border-color: #82aaff;
  border-style: solid;
  border-width: 1px;
  font-weight: 900;
  height: 1.5rem;
  width: 1.5rem;
  color: #82aaff;
  margin: .5rem;
`;
