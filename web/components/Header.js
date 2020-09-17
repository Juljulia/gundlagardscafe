import Burger from './BurgerMenu';
import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 64px;
  width: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  /* transition: all 0.3s ease-in-out; */
  .header__logo {
    background-color: grey;
    height: 35px;
    width: 35px;
    margin-left: 24px;
    margin-top: 16px;
    border-radius: 11px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Burger></Burger>
      <div className="header__logo"></div>
    </StyledHeader>
  );
};

export default Header;
