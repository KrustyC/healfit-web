import React, { useContext } from 'react';
import { DrawerContext } from 'app/contexts/DrawerContext';

import { NavLink, withRouter } from 'react-router-dom';

import {
  UikNavSectionTitle,
  UikNavSection,
  UikNavTitle,
  UikNavLink,
} from '@duik';

import Container from './Container';

import { Panel, Header } from './style';

const Drawer = () => {
  const { isMenuOpen } = useContext(DrawerContext);

  return (
    <Container>
      <Panel open={isMenuOpen || undefined}>
        <Header>
          <UikNavTitle>Healfit</UikNavTitle>
        </Header>
        <UikNavSection>
          <UikNavSectionTitle>Navigate</UikNavSectionTitle>
          <UikNavLink Component={NavLink} to="/meal-plan">
            Meal Plan
          </UikNavLink>
          <UikNavLink Component={NavLink} to="/recipes">
            Recipes
          </UikNavLink>
          <UikNavLink Component={NavLink} to="/meal-plan">
            Meal Plannner
          </UikNavLink>
        </UikNavSection>
      </Panel>
    </Container>
  );
};

export default withRouter(Drawer);
