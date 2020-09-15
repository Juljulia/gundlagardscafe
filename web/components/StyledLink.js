import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
);

export default styled(StyledLink)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 4px 6px rgba(205, 133, 1, 0.25);
  border-radius: 11px;
  padding: 8px 40px;

  font-family: Amatic SC;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;

  &:hover {
    box-shadow: inset -1px -1px 6px rgba(135, 88, 1, 0.69);
  }

  &:active {
    box-shadow: inset 0px 4px 6px #b37401;
  }
`;
