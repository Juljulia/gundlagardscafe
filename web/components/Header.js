import Burger from './BurgerMenu';
import styled from 'styled-components';
import Link from 'next/link';

const Header = ({ show }) => {
  return (
    <StyledHeader show={show}>
      <Burger></Burger>
      <Link href="/">
        <img src="gundla-small.png" className="header__logo"></img>
      </Link>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  z-index: 10;
  top: ${(props) => (props.show ? 0 : '-10px')};
  right: 0;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: all 0.15s ease-out;

  .header__logo {
    margin-left: 24px;
    z-index: 11;
  }

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    /* height: 84px; */
  }
`;

export default Header;
