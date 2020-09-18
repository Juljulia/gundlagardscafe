import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Menu = ({ show = false }) => {
  return (
    <Navigation show={show}>
      <div className="navigation">
        <img src="/Ellipse.png" className="ellipse"></img>

        <Link href="/">
          <a>Hem</a>
        </Link>

        <Link href="/hitta-hit">
          <a>Hitta hit / Öppettider</a>
        </Link>

        <Link href="/mat">
          <a>Äta</a>
        </Link>

        <Link href="/event">
          <a>Evenemang</a>
        </Link>

        <Link href="/privata-event">
          <a>Privata event</a>
        </Link>

        <Link href="/#about">
          <a>Om oss</a>
        </Link>

        <Link href="/#contact">
          <a>Kontakt</a>
        </Link>

        <Link href="/fragor-svar">
          <a>Frågor och svar</a>
        </Link>

        <div className="social">
          <h3>Följ oss!</h3>
          <a href="https://www.facebook.com/gundlagardscafe/" target="_blank">
            <img src="/fb-dark.png"></img>
          </a>
          <a
            href="https://www.instagram.com/gundlagardscafe/?__a=2"
            target="_blank"
          >
            <img src="insta-dark.png"></img>
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
      </div>
      <div className="tent">
        <img src="/tent-menu.png"></img>
      </div>
    </Navigation>
  );
};

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
  z-index: 90;
  background-color: ${({ theme }) => theme.colors.backgroundLight};

  transition: all 0.2s ease-in-out;
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  height: ${(props) => (props.show ? '100%' : '0px')};

  .navigation {
    display: flex;
    flex-direction: column;
    padding: 64px 0 0 32px;
  }

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
    display: flex;
    justify-content: center;
    flex: 0 1 auto;
    width: 100%;
    padding-top: 64px;
  }
`;

Menu.propTypes = {
  show: PropTypes.bool,
};

export default Menu;
