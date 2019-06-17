import React from 'react';
import styled from 'styled-components';
import Logo from 'assets/icons/logo.svg';
import Link from 'uikit/elements/Link';

const Header = styled.header`
  display: flex;
  width: 80%;
  margin: auto;
  height: 10vh;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  flex: 1;
  svg {
    height: 50px;
    width: 50px;
  }
`;

const LogoTitle = styled.h4`
  font-weight: 400;
  margin-left: ${({ theme }) => theme.margin.sm};
`;

const Nav = styled.div`
  flex: 2;
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

const NavLink = styled.li`
  /* font-size: 18px; */
`;

const End = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

export default () => (
  <Header>
    <LogoContainer>
      <Logo />
      <LogoTitle>Healfit</LogoTitle>
    </LogoContainer>
    <Nav>
      <NavLinks>
        <NavLink>
          <Link to="/">Specs</Link>
        </NavLink>
        <NavLink>
          <Link to="/">Products</Link>
        </NavLink>
        <NavLink>
          <Link to="/">ContLinkct</Link>
        </NavLink>
      </NavLinks>
    </Nav>
    <End />
  </Header>
);
