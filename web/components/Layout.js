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
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <Header></Header>
        {children}
        {/* <Footer></Footer> */}
      </main>
    </ThemeProvider>
  );
}

export default Layout;
