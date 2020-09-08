import Link from 'next/link';
import styled from 'styled-components';

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

const Menu = () => (
  <Navigation>
    <Link href="/om">
      <a>Om oss</a>
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

export default Menu;
