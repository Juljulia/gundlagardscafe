import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap');

  * {
      box-sizing: border-box;
      outline: none;
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: normal;
      margin: 0;
    padding: 0;
  }

  html {
  }
  
  body {
    color: ${({ theme }) => theme.colors.primary};
}


h1 {
    color: black;
    font-size: 50px;
}
`;
