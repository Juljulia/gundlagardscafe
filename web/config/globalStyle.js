import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'IBM Plex Sans', sans-serif;
  }

  h1 {
    font-family: Amatic SC;
    font-weight: normal;
    font-size: 40px;
    line-height: 50px;
  }

  h2 {
    font-family: Amatic SC;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
  }

  p {
    font-weight: 300;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.025em;
  }
`;

export default GlobalStyle;
