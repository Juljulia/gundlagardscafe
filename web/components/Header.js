import styled from 'styled-components';
import Link from 'next/link';
import Nav from './Nav';
import 'lazysizes';

const Header = ({ show }) => {
  return (
    <StyledHeader>
      <Link href="/">
        <img
          data-src="gundla.svg"
          className="header__logo lazyload desktop"
        ></img>
      </Link>
      <Link href="/">
        <img
          data-src="flower1.svg"
          className="header__logo lazyload mobile"
        ></img>
      </Link>
      <div className="desktop-navlinks">
        <Link href="/hitta-hit">
          <a>Hitta hit</a>
        </Link>
        <Link href="/ata">
          <a>Äta</a>
        </Link>

        <Link href="/evenemang">
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

  .desktop {
    display: none;
    width: 56px;
    height: 62px;
  }

  .mobile {
    display: block;
    height: 50px;
    width: 50px;
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
      margin: 0 16px;
      display: inline-block;
      transition: transform 0.1s ease-in-out;
    }

    a:hover {
      transform: scale(1.05);
    }

    .desktop {
      display: block;
    }

    .mobile {
      display: none;
    }

    .mail-to:hover {
      text-decoration: underline;
    }
  }
`;

export default Header;
