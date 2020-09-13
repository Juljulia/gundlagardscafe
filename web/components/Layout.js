import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/themes';

function Layout({ children, pageTitle = '' }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main>
        <Head>
          <title>Gundla Gårdscafé | {pageTitle}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Header></Header>
        {children}
        <Footer></Footer>
      </main>
    </ThemeProvider>
  );
}

export default Layout;
