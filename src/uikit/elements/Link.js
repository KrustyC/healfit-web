import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  Link as ReactRouterLink,
  NavLink as ReactRouterNavLink,
} from 'react-router-dom';

import { StyledButton } from '../blocks/Button';

const ButtonLink = StyledButton.withComponent(ReactRouterLink);

const Link = styled(ReactRouterLink)`
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  cursor: pointer;

  ${({ font }) =>
    font === 'default' &&
    css`
      font-family: ${({ theme }) => theme.fonts.default};
    `} ${({ font }) =>
    font === 'serif' &&
    css`
      font-family: ${({ theme }) => theme.fonts.serif};
    `}

  &:hover, &:focus {
    color: ${({ theme }) => theme.util.darkenOnHover(theme.colors.accent)};
    text-decoration: underline;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.util.darkenOnActive(theme.colors.accent)};
    text-decoration: underline;
  }
`;

const NavLink = Link.withComponent(ReactRouterNavLink);
const ALink = Link.withComponent('a');

const LinkElement = props => {
  let { component } = props;
  const { children, to, ...rest } = props;

  if (String(to).indexOf('http') > -1) {
    component = 'a';
  }

  switch (component) {
    case 'button':
      return <ButtonLink {...rest}>{children}</ButtonLink>;
    case 'nav':
      return <NavLink {...rest}>{children}</NavLink>;
    case 'a':
      return (
        <ALink {...rest} href={to} target="_blank">
          {children}
        </ALink>
      );
    default:
      return <Link {...rest}>{children}</Link>;
  }
};

LinkElement.propTypes = {
  children: PropTypes.any.isRequired,
  component: PropTypes.oneOf(['button', 'index']),
  font: PropTypes.oneOf(['default', 'serif']),
};

LinkElement.defaultProps = {
  component: null,
};

export default LinkElement;
