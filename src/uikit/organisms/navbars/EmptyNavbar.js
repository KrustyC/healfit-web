import React from 'react';

import Navbar from 'uikit/blocks/Navbar';
import Logo from 'assets/icons/logo.svg';

export default () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand to="/admin">
        <Logo />
      </Navbar.Brand>
    </Navbar.Header>
  </Navbar>
);
