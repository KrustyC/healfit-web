import React from 'react';

import Navbar from 'uikit/blocks/Navbar';
import Logo from 'assets/icons/logo.svg';

export default () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand to="/dashboard">
        <Logo />
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
      <Navbar.Menu hideSmall>
        <Navbar.Link type="index" to="/dashboard">
          Dashboard
        </Navbar.Link>
        <Navbar.Link type="index" to="/recipes">
          Recipes
        </Navbar.Link>
      </Navbar.Menu>
    </Navbar.Collapse>
  </Navbar>
);
