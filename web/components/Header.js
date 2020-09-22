import styled from 'styled-components';
import Link from 'next/link';
import Nav from './Nav';
import 'lazysizes';

const Header = ({ show }) => {
  return (
    <StyledHeader>
      <Link href="/">
        <img
          data-src="gundla-small.png"
          className="header__logo lazyload"
        ></img>
      </Link>
      <div className="desktop-navlinks">
        <Link href="/hitta-hit">
          <a>Hitta hit</a>
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
      </div>
      <Nav show={show} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 10;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.backgroundLight};

  .lazyload,
  .lazyloading {
    opacity: 0;
  }
  .lazyloaded {
    opacity: 1;
    transition: opacity 1000ms;
  }

  .header__logo {
    cursor: pointer;
    margin-left: 24px;
  }

  .desktop-navlinks {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    height: 66px;
    .desktop-navlinks {
      display: block;
    }

    .desktop-navlinks a {
      font-family: Amatic SC;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 30px;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.black};
      padding: 0 16px;
    }
  }
`;

export default Header;
