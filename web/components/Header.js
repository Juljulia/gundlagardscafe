import styled from 'styled-components';
import Link from 'next/link';
import Nav from './Nav';

const Header = ({ showHeader, show }) => {
  return (
    <StyledHeader showHeader={showHeader}>
      <Link href="/">
        <img src="gundla-small.png" className="header__logo"></img>
      </Link>
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
  top: ${(props) => (props.showHeader ? 0 : '-10px')};
  right: 0;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  opacity: ${(props) => (props.showHeader ? 1 : 0)};
  transition: all 0.15s ease-out;

  .header__logo {
    margin-left: 24px;
  }

  @media only screen and (min-width: 768px) {
    /* height: 84px; */
  }
`;

export default Header;
