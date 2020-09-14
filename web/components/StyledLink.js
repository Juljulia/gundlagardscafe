import Link from 'next/link';
import styled from 'styled-components';

import colors from '../styles/colors';

const StyledLink = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
);

export default styled(StyledLink)`
  background-color: ${colors.primary};
  color: ${colors.white};
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  box-shadow: drop-shadow(0px 4px 6px rgba(205, 133, 1, 0.25));
  border-radius: 11px;
  padding: 1rem 2.5rem;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    color: #fff;
    /* outline: none;
    border: 0; */
  }
`;
