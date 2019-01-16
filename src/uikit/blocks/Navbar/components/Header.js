import React from 'react';
import styled, { css } from 'styled-components';

import Brand from './Brand';
import Toggle from './Toggle';

const HeaderWrapper = styled.div`
  display: flex;

  ${({ theme }) => css`
    min-height: ${theme.dimensions.navbarHeight};
    @media (max-width: ${theme.sizes.md}) {
      justify-content: space-between;
    }
  `}
`;

HeaderWrapper.propTypes = {
  children: (props, propName, componentName) => {
    const prop = props[propName];

    let error = null;
    React.Children.forEach(prop, (child, index) => {
      if (
        child.type.displayName !== Brand.displayName &&
        child.type.displayName !== Toggle.displayName
      ) {
        error = new Error(
          `$children[${index}] of ${componentName} children should be either "${
            Brand.displayName
          }" or "${Toggle.displayName}"`
        );
      }
    });
    return error;
  },
};

HeaderWrapper.displayName = 'NavbarHeader';
export default HeaderWrapper;
