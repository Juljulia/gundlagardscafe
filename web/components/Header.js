import Burger from './BurgerMenu';
import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 66px;
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
  }
`;

const Header = ({ show }) => {
  return (
    <StyledHeader show={show}>
      <Burger></Burger>
      <img src="gundla-small.png" className="header__logo"></img>
    </StyledHeader>
  );
};

export default Header;
