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
    <Navbar.Collapse>
      <Navbar.Menu hideSmall>
        <Navbar.Link type="index" to="/admin/users">
          Users
        </Navbar.Link>
        <Navbar.Link to="/admin/ingredients">Ingredients</Navbar.Link>
      </Navbar.Menu>
    </Navbar.Collapse>
  </Navbar>
);
