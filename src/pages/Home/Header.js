import React from 'react';
import styled from 'styled-components';
import Logo from 'assets/icons/logo.svg';

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
  font-weight: 800;
  margin-left: ${({ theme }) => theme.margin.sm};
`;

const Nav = styled.div`
  flex: 2;
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
    <Nav />
    <End />
  </Header>
);
