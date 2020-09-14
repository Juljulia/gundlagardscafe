import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Navigation = styled.nav`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 90;
  background-color: white;
  transition: all 0.3s ease-in-out;

  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  width: ${(props) => (props.show ? '100%' : '0px')};

  a:first-child {
    margin-top: 100px;
  }
  a {
    text-decoration: none;
    color: black;
    font-size: 20px;
    line-height: 35px;
  }
  a:hover {
    color: 'red';
  }
`;

const Menu = ({ show = false }) => (
  <Navigation show={show}>
    <Link href="/">
      <a>Hem</a>
    </Link>

    <Link href="/hitta-hit">
      <a>Hitta hit / Öppettider</a>
    </Link>

    <Link href="/event">
      <a>Evenemang</a>
    </Link>

    <Link href="/mat">
      <a>Mat</a>
    </Link>

    <Link href="/fragor-svar">
      <a>Frågor och svar</a>
    </Link>

    <Link href="/privata-event">
      <a>Privata event</a>
    </Link>
  </Navigation>
);

Menu.propTypes = {
  show: PropTypes.bool,
};

export default Menu;
