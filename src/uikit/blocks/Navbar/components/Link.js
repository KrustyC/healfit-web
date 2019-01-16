import React from 'react';
import styled, { css } from 'styled-components';
import BaseLink from 'uikit/elements/Link';

const StyledLink = styled(BaseLink)`
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 100;
  height: 100%;
  min-width: 60px;

  &:hover,
  &:focus {
    text-decoration: none;
  }

  ${({ theme }) => css`
    padding-left: 20px;
    padding-right: 20px;

    &.active {
      background: ${theme.colors.primary};
    }

    &:hover,
    &:focus {
      background: ${theme.colors.primary};
    }

    @media (min-width: ${theme.sizes.md}) {
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background: ${theme.colors.primary};
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
      }

      &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }

      &.active::after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }

    @media (max-width: ${theme.sizes.md}) {
      flex: 1;
      justify-content: flex-start;
      min-height: 50px;
    }
  `}

  span {
    display: none;
    ${({ theme }) => css`
      @media (max-width: ${theme.sizes.md}) {
        display: block;
        text-transform: capitalize;
        margin-left: 10px;
      }
    `}
  }
`;

const Link = props => <StyledLink type="nav" {...props} />;
Link.displayName = 'NavbarLink';

export default Link;
