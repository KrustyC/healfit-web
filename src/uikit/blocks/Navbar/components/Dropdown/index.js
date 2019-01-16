import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DropdownWrapper from './DropdownWrapper';
import Content from './Content';
import Item from './Item';

class NavbarDropdown extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    };

    this.dropdownRef = React.createRef();
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = e => {
    e.preventDefault();
    if (!this.dropdownRef.current.contains(e.target)) {
      // user is clicking outside
      this.setState({ expanded: false });
    }
  };

  toggleExpand = e => {
    e.preventDefault();
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  };

  render() {
    const { children } = this.props;
    const { expanded } = this.state;

    const [button, ...items] = children;
    return (
      <DropdownWrapper innerRef={this.dropdownRef}>
        {React.cloneElement(button, {
          onClick: this.toggleExpand,
        })}
        {expanded && <Content>{items}</Content>}
      </DropdownWrapper>
    );
  }
}

NavbarDropdown.Item = Item;
NavbarDropdown.displayName = 'NavbarDropdown';

export default NavbarDropdown;
