import Link from 'next/link';
import styled from 'styled-components';

const Menu = () => (
  <Navigation>
    <Link href="/about">
      <a>Om oss</a>
    </Link>

    <Link href="/find-us">
      <a>Hitta hit / Öppettider</a>
    </Link>

    <Link href="/event">
      <a>Evenemang</a>
    </Link>

    <Link href="/food">
      <a>Mat</a>
    </Link>

    <Link href="/qa">
      <a>Frågor och svar</a>
    </Link>

    <Link href="/private-event">
      <a>Privata event</a>
    </Link>
  </Navigation>
);

const Navigation = styled.nav`
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 25px 0 0 25px;

  a {
    text-decoration: none;
    color: black;
  }
`;
export default Menu;
