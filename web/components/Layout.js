import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Layout({ children, pageTitle = '' }) {
  return (
    <main>
      <Head>
        <title>Gundla Gårdscafé | {pageTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="flower.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=IBM+Plex+Sans:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
