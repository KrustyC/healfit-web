import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { DrawerContext } from 'app/contexts/DrawerContext';

import { NavLink } from 'react-router-dom';

import {
  UikNavSectionTitle,
  UikNavSection,
  UikNavTitle,
  UikNavLink,
  UikNavPanel,
} from '@duik';

const Panel = styled(UikNavPanel)`
  ${({ theme, display }) => css`
    display: none;

    @media (max-width: ${theme.sizes.md}) {
      display: block;
      position: fixed;
      top: 0;
      right: 100%;
      border-right: none;
      box-shadow: 0 1px 10px 0 rgba(201, 53, 53, 0.07);
      height: calc(100vh - 70px);
      top: 70px;
      transition: 0.3s all;
      transform: translateX(o);
      height: calc(100vh - 56px);
      top: 56px;
      z-index: 1000000;

      ${display &&
        css`
          transform: translateX(100%);
        `}
    }
  `}
`;

const Drawer = () => {
  const { isMenuOpen } = useContext(DrawerContext);

  return (
    <Panel display={isMenuOpen}>
      <UikNavTitle>Healfit</UikNavTitle>
      <UikNavSection>
        <UikNavSectionTitle>Navigate</UikNavSectionTitle>
        <UikNavLink Component={NavLink} to="/dashboard" />
        <UikNavLink Component={NavLink} to="/recipes" />
        <UikNavLink Component={NavLink} to="/meal-plan" />
      </UikNavSection>
    </Panel>
  );
};

export default Drawer;
