import Burger from '../components/Burger';
import styled from 'styled-components';

const StyledHeader = styled.header``;

const Header = () => (
  <StyledHeader>
    <Burger></Burger>
  </StyledHeader>
);

export default Header;
