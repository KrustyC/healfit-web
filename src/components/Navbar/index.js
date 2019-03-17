import React from 'react';
import { UikTopBar, UikTopBarSection, UikTopBarTitle, UikButton } from '@uikit';

const Navbar = () => (
  <UikTopBar>
    <UikTopBarSection>
      <UikTopBarTitle>Dashboard</UikTopBarTitle>
    </UikTopBarSection>

    <UikTopBarSection>
      <UikButton primary>Login</UikButton>
    </UikTopBarSection>
  </UikTopBar>
);

export default Navbar;
