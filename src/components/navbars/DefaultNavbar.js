import React from 'react';
import { UikTopBar, UikTopBarSection, UikTopBarTitle, UikButton } from '@duik';

const Navbar = () => (
  <UikTopBar>
    <UikTopBarSection>
      <UikTopBarTitle>Healfit</UikTopBarTitle>
    </UikTopBarSection>

    <UikTopBarSection>
      <UikButton primary>Login</UikButton>
    </UikTopBarSection>
  </UikTopBar>
);

export default Navbar;
