import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/themes';

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main>
        <Head></Head>
        {children}
      </main>
    </ThemeProvider>
  );
}

export default Layout;
