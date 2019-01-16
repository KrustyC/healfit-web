import React from 'react';

import Navbar from 'uikit/blocks/Navbar';

export default () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand to="/">
        {/* eslint-disable-next-line */}
        <img src={require('assets/icons/logo.svg')} />
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
  </Navbar>
);
