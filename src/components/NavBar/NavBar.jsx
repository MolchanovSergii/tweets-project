import { Container } from 'components/SharedLayout/SharedLayoutStyled';
import { StyledNav, NavList, NavItem, StyledLink } from './NavBarStyled';

const Navbar = () => {
  return (
    <Container>
      <StyledNav>
        <NavList>
          <NavItem>
            <StyledLink to="/">Home</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/tweets">Tweets</StyledLink>
          </NavItem>
        </NavList>
      </StyledNav>
    </Container>
  );
};

export default Navbar;
