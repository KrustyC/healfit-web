import React, { Component } from 'react';

import StyledNavbar from './style';
import NavbarContext from './context';
import {
  Brand,
  Collapse,
  Dropdown,
  Header,
  Link,
  Menu,
  Toggle,
} from './components';

class Navbar extends Component {
  state = {
    isToggleActive: false,
  };

  onToggle = () =>
    this.setState(({ isToggleActive }) => ({
      isToggleActive: !isToggleActive,
    }));

  render() {
    const { isToggleActive } = this.state;

    const context = {
      isToggleActive,
      onToggle: this.onToggle,
    };

    return (
      <NavbarContext.Provider value={context}>
        <StyledNavbar
          id="uikit-navbar"
          isToggleActive={isToggleActive}
          {...this.props}
        />
      </NavbarContext.Provider>
    );
  }
}

Navbar.Brand = Brand;
Navbar.Collapse = Collapse;
Navbar.Header = Header;
Navbar.Dropdown = Dropdown;
Navbar.Link = Link;
Navbar.Menu = Menu;
Navbar.Toggle = Toggle;

export default Navbar;
