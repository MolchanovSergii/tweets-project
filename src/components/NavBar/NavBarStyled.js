import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNav = styled.nav`
  padding-left: 10;
`;

export const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
`;

export const NavItem = styled.li`
  margin: 0 1rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;

  color: rgba(235, 216, 255, 1);

  &:hover {
    color: rgba(92, 211, 168, 1);
  }
`;
