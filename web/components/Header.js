import Burger from './BurgerMenu';
import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 75px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  /* transition: all 0.3s ease-in-out; */

  .sticky {
    background-color: black;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Burger></Burger>
    </StyledHeader>
  );
};

export default Header;
