import React from 'react';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

import Menu from './Menu';
import NavbarContext from '../context';

const StyledCollapse = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  border: none;

  ${({ theme }) => css`
    min-height: ${theme.dimensions.navbarHeight};

    @media (min-width: ${theme.sizes.md}) {
      flex: 4;
    }
    @media (max-width: ${theme.sizes.md}) {
      display: ${ifProp({ isToggleActive: true }, 'flex', 'none')};
      flex-direction: column;
      background: black;
    }
  `}
`;

StyledCollapse.propTypes = {
  children: (props, propName, componentName) => {
    const prop = props[propName];

    let error = null;
    React.Children.forEach(prop, (child, index) => {
      if (child.type.displayName !== Menu.displayName) {
        error = new Error(
          `$children[${index}] of ${componentName} children should be "${
            Menu.displayName
          }"`
        );
      }
    });
    return error;
  },
};

const Collapse = props => (
  <NavbarContext.Consumer>
    {({ isToggleActive }) => (
      <StyledCollapse isToggleActive={isToggleActive} {...props} />
    )}
  </NavbarContext.Consumer>
);

Collapse.displayName = 'NavbarCollapse';
export default Collapse;
