import React from 'react';
import styled, { css } from 'styled-components';
import BaseLink from 'uikit/elements/Link';

const StyledLink = styled(BaseLink)`
  ${({ theme }) => css`
    display: flex;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    z-index: 100;
    height: 100%;
    min-width: 60px;
    color: ${theme.colors.font};

    &:hover,
    &:focus {
      text-decoration: none;
    }

    padding-left: 20px;
    padding-right: 20px;

    &.active {
      color: ${theme.colors.primary};
    }

    &:hover,
    &:focus {
      color: ${theme.colors.primary};
    }

    @media (max-width: ${theme.sizes.md}) {
      flex: 1;
      justify-content: flex-start;
      min-height: 50px;
    }

    span {
      display: none;
      @media (max-width: ${theme.sizes.md}) {
        display: block;
        text-transform: capitalize;
        margin-left: 10px;
      }
    }
  `}
`;

const Link = props => <StyledLink type="nav" {...props} />;
Link.displayName = 'NavbarLink';

export default Link;
