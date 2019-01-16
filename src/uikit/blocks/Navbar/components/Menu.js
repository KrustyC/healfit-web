import React from 'react';
import styled, { css } from 'styled-components';
import Link from './Link';
import Dropdown from './Dropdown';

const MenuWrapper = styled.div`
  display: flex;
  flex: 1;
  z-index: 100;
  ${({ theme, hideSmall, pullRight }) => css`
    justify-content: ${pullRight ? 'flex-end' : 'flex-start'};

    @media (max-width: ${theme.sizes.md}) {
      display: ${hideSmall ? 'none' : 'flex'};
      flex-direction: column;
      background: white;
      border-top: none;
    }
  `}
`;

MenuWrapper.propTypes = {
  children: (props, propName, componentName) => {
    const prop = props[propName];

    let error = null;
    React.Children.forEach(prop, (child, index) => {
      if (
        child.type.displayName !== Link.displayName &&
        child.type.displayName !== Dropdown.displayName
      ) {
        error = new Error(
          `$children[${index}] of ${componentName} children should be either ${
            Link.displayName
          } or ${Dropdown.displayName}`
        );
      }
    });
    return error;
  },
};

MenuWrapper.displayName = 'NavbarMenu';
export default MenuWrapper;
