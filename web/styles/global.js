import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
      box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.primary};
}

h1 {
    color: black;
    font-size: 50px;
}
`;
