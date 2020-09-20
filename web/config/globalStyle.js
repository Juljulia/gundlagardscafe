import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
 ${normalize}

  html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'IBM Plex Sans', sans-serif;
    font-style: normal;
    color: #2B2928;
    scroll-behavior: smooth;
  }

  h1 {
    margin: 0;
    font-family: Amatic SC;
    font-size: 50px;
    line-height: 57px;
    font-weight: normal;
  }

  h2 {
    margin: 0;
    font-family: Amatic SC;
    font-size: 40px;
    line-height: 44px;
    font-weight: normal;
  }

  h3 {
    margin: 0;
    font-family: Amatic SC;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
  }

  p {
    margin: 0;
    font-weight: 300;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.025em;
  }

  input:focus,textarea:focus,button:focus {
    outline:none !important;
  }

  button, a, select {
    cursor: pointer;
  }
`;

export default GlobalStyle;
