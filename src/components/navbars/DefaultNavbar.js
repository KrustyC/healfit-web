import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  UikTopBar,
  UikTopBarSection,
  UikTopBarTitle,
  UikTopBarMenuDivider,
  UikTopBarLink,
} from '@duik';

const Divider = styled(UikTopBarMenuDivider)`
  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.md}) {
      display: none;
    }
  `}
`;

const Section = styled(UikTopBarSection)`
  ${({ theme }) => css`
    padding: 0 ${theme.padding.sm};
  `}
`;

const Navbar = () => (
  <UikTopBar>
    <UikTopBarSection>
      <UikTopBarTitle>Healfit</UikTopBarTitle>
    </UikTopBarSection>

    <Section>
      <UikTopBarTitle>Healfit</UikTopBarTitle>
      <Divider />

      <UikTopBarLink Component={NavLink} to="/auth/signin">
        Login
      </UikTopBarLink>
    </Section>
  </UikTopBar>
);

export default Navbar;
