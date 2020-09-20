import Link from 'next/link';
import styled from 'styled-components';
import { Squash as Hamburger } from 'hamburger-react';
import PropTypes from 'prop-types';
import 'lazysizes';

const Nav = () => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <Container show={isOpen}>
      <div className="burger__wrapper">
        <Hamburger rounded size={35} toggled={isOpen} toggle={setOpen} />
      </div>

      <nav>
        <img
          data-src="/Ellipse.png"
          className="ellipse"
          className="lazyload"
        ></img>

        <Link href="/">
          <a onClick={() => setOpen(false)}>Hem</a>
        </Link>

        <Link href="/hitta-hit">
          <a onClick={() => setOpen(false)}>Hitta hit / Öppettider</a>
        </Link>

        <Link href="/mat">
          <a onClick={() => setOpen(false)}>Äta</a>
        </Link>

        <Link href="/event">
          <a onClick={() => setOpen(false)}>Evenemang</a>
        </Link>

        <Link href="/privata-event">
          <a onClick={() => setOpen(false)}>Privata event</a>
        </Link>

        <Link href="/#about">
          <a onClick={() => setOpen(false)}>Om oss</a>
        </Link>

        <Link href="/#contact">
          <a onClick={() => setOpen(false)}>Kontakt</a>
        </Link>

        <Link href="/fragor-svar">
          <a onClick={() => setOpen(false)}>Frågor och svar</a>
        </Link>

        <div className="social">
          <h3>Följ oss!</h3>
          <a href="https://www.facebook.com/gundlagardscafe/" target="_blank">
            <img data-src="/fb-dark.png" className="lazyload"></img>
          </a>
          <a
            href="https://www.instagram.com/gundlagardscafe/?__a=2"
            target="_blank"
          >
            <img data-src="insta-dark.png" className="lazyload"></img>
          </a>
        </div>

        <div className="contact-info">
          <p>Kontaktinfo:</p>
          <p>Samantha Larsen</p>
          <a className="mail-to" href="mailto:gundlagardscafe@gmail.com">
            gundlagardscafe@gmail.com
          </a>

          <p>mobil: 0708-84 07 17 </p>
        </div>
        <p>Adress: Gundla mosse 32, 412 76 Göteborg</p>
        <div className="tent">
          <img data-src="/tent-menu.png" className="lazyload"></img>
        </div>
      </nav>
    </Container>
  );
};

const Container = styled.div`
  .burger__wrapper {
    margin-right: 16px;
    padding: 8px;
  }
  .hamburger-react {
    z-index: 500;
  }

  nav {
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    padding: 64px 0 0 32px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: scroll;
    z-index: 90;
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
    height: ${(props) => (props.show ? '100%' : '0px')};
    transition: all 0.2s ease-in-out;

    a {
      z-index: 99;
      text-decoration: none;
      font-family: Amatic SC;
      font-style: normal;
      font-weight: normal;
      font-size: 40px;
      line-height: 44px;
      padding-bottom: 32px;
      color: ${({ theme }) => theme.colors.black};
    }
  }

  .social {
    display: flex;
    flex-direction: row;
  }

  .social h3 {
    font-family: Amatic SC;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 44px;
    padding-right: 32px;
  }

  .social img {
    padding-right: 8px;
  }

  .social a {
    padding: 0;
  }

  p {
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 25px;
  }

  .ellipse {
    border: 1px solid red;
    visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
    z-index: -1;
    position: absolute;
    left: 0;
    top: 410px;
  }

  .mail-to {
    padding: 0;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 14px;
    line-height: 25px;
  }

  .contact-info {
    padding: 64px 0 32px 0;
  }

  .contact-info p {
    font-weight: 300;
  }

  .contact-info + p {
    font-weight: 300;
  }

  .tent {
    border: 1px solid pink;
    display: flex;
    justify-content: center;
    flex: 0 1 auto;
    width: 100%;
    height: 100%;
    margin-top: 64px;
    margin-bottom: 64px;
  }
`;

Nav.propTypes = {
  show: PropTypes.bool,
};

export default Nav;
