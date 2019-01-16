import React from 'react';
import styled, { css } from 'styled-components';
import NavbarContext from '../context';

const StyledToggle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  border: none;
  padding: 0;

  &:active {
    padding: 0;
  }

  ${({ theme }) => css`
    @media (min-width: ${theme.sizes.md}) {
      display: none;
    }

    @media (max-width: ${theme.sizes.md}) {
      background: ${theme.colors.light};
      color: ${theme.colors.primary};
    }
  `}
`;

const Toggle = props => (
  <NavbarContext.Consumer>
    {navbar => (
      <StyledToggle onClick={navbar.onToggle} {...props}>
        <i className="fa fa-reorder" />
      </StyledToggle>
    )}
  </NavbarContext.Consumer>
);

Toggle.displayName = 'NavbarToggle';

export default Toggle;
