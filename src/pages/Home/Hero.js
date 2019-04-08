import React from 'react';
import styled, { css } from 'styled-components';

import { NavLink } from 'react-router-dom';
import {
  UikTopBar,
  UikTopBarSection,
  UikTopBarLink,
  UikTopBarMenuDivider,
} from '@duik';
import Logo from 'assets/icons/logo.svg';
import MainImage from 'assets/images/undrawn/chef.svg';
import P from 'uikit/elements/P';
import Heading from 'uikit/elements/Heading';
import Button from 'uikit/blocks/Button';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  height: 100vh;
`;

const Navbar = styled(UikTopBar)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 60px;
  background: transparent !important;
  border: none;
`;

const Brand = styled(UikTopBarSection)`
  ${({ theme }) => css`
    svg {
      height: 50px;
      width: 50px;
      margin-right: ${theme.margin.sm};
    }
  `}
`;

const Left = styled.div`
  ${({ theme }) => css`
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 0 ${theme.padding.md};
  `}
`;

const Right = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  svg {
    height: 100%;
    width: 100%;
  }
`;

const Title = styled.span`
  font-size: 4rem;
  color: rgba(32, 48, 60, 1);
  letter-spacing: 0.03rem;
`;

const Descritpion = styled(P)`
  font-size: 1.6rem;
  color: rgba(32, 48, 60, 1);
`;

const Divider = styled(UikTopBarMenuDivider)`
  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.md}) {
      display: none;
    }
  `}
`;

const Header = () => (
  <Container>
    <Navbar>
      <Brand>
        <Logo />
        <Heading>Healfit</Heading>
      </Brand>

      <UikTopBarSection>
        <UikTopBarLink Component={NavLink} to="/recipes">
          Recipes
        </UikTopBarLink>
        <Divider />
        <UikTopBarLink Component={NavLink} to="/auth/signin">
          Sign In
        </UikTopBarLink>
        <UikTopBarLink Component={NavLink} to="/auth/signup">
          Sign Up
        </UikTopBarLink>
      </UikTopBarSection>
    </Navbar>
    <Left>
      <Title>Eat, healfitly.</Title>
      <Descritpion>
        Use our recipes, or share your own. Create your meal plan and track your
        progress. All for free, in one place.
      </Descritpion>
      <Button to="/auth/signin" size="large" color="primary">
        Get Started
      </Button>
    </Left>
    <Right>
      <MainImage />
    </Right>
  </Container>
);

export default Header;
