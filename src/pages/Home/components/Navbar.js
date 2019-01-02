import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.nav`
  ${({ theme, accent, fixed, noShadow, reverseShadow }) => css`
    position: ${fixed ? 'fixed' : 'absolute'};
    top: 0px;
    right: 0px;
    left: 0px;
    background: ${theme.colors.white};
    height: ${theme.dimensions.navbarHeight};
    z-index: ${theme.zIndex.navbar};
    display: flex;
    align-items: center;
    justify-content: center;

    ${accent &&
      css`
        background-color: #fed330;
      `}

    ${!noShadow &&
      css`
        border-bottom: 1px solid ${theme.colors.borderColor};
        box-shadow: ${theme.shadows.navbar(reverseShadow)};
      `};

    ${reverseShadow &&
      css`
        border-top: 1px solid ${theme.colors.borderColor};
        border-bottom: none;
      `}
  `};
`;

const Navbar = () => <Wrapper />;

export default Navbar;
