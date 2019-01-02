import React from 'react';
import styled, { css } from 'styled-components';

import Heading from 'uikit/elements/Heading';
import Link from 'uikit/elements/Link';
import P from 'uikit/elements/P';
import Layout from './components/Layout';

const Nav = styled.div`
  left: 0px;
  right: 0px;
  top: 0;
  position: absolute;
  height: 80px;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoDiv = styled.div``;

const LinkDiv = styled.div``;

const NavLink = styled(Link)`
  ${({ theme }) => css`
    text-decoration: none;
    margin-right: 50px;
    color: ${theme.colors.light};
    font-weight: bold;
  `}
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Div = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ center }) => (center ? 'center' : 'flex-start')};
  padding: 2rem;
`;

const Descritpion = styled(P)`
  color: white;
  max-width: 600px;
`;

const Img = styled.img`
  max-height: 300px;
  margin-bottom: ${({ theme }) => theme.spaces.small};
`;

const Header = () => (
  <Layout coloured size="fullscreen" height="80vh" direction="column">
    <Nav>
      <LogoDiv />

      <LinkDiv>
        <NavLink to="/auth/signup">Sign Up</NavLink>
        <NavLink to="/auth/signin">Sign In</NavLink>
      </LinkDiv>
    </Nav>
    <Container>
      <Div center>
        {/* eslint-disable-next-line */}
        <Img src={require('assets/images/undrawn/healthy-habit.svg')} />
      </Div>
      <Div>
        <Heading level="title" style={{ color: 'white' }}>
          Keep It Fit
        </Heading>
        <Heading
          level="h4"
          align="left"
          style={{ fontStyle: 'italic', color: 'white' }}
        >
          Keep yourself fit, by tracking your food and your progress
        </Heading>
        <Descritpion>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less.
        </Descritpion>
      </Div>
    </Container>
  </Layout>
);

export default Header;
