
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  font-weight: 300;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}

a{
  text-decoration: none;
  color: black;
}

ul{
  list-style: none;
}
  `