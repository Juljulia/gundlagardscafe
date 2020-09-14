import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  outline: none;
  font-family: 'IBM Plex Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  margin: 0;
  padding: 0;
  color: black;
}

button, link {
  cursor: pointer;
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

a {
  font-family: Amatic SC;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
}


`;
