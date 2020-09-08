import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${Normalize}
  html,
  body {
    padding: 0;
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
