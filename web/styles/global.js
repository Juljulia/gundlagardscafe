import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
      box-sizing: border-box;
      outline: none;
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: normal;
      margin: 0;
    padding: 0;
    color: black;
  }

  html {
  }
  
  body {
    color: ${({ theme }) => theme.colors.primary};
}


h1 {
    font-size: 50px;
}
`;
