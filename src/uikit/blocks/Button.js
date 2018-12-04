import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import kebabCase from 'lodash/kebabCase';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const defaultYPadding = '.55rem';
const defaultXPadding = '1.5rem';

export const StyledButton = styled.button`
  display: inline-block;
  padding: ${defaultYPadding} ${defaultXPadding};
  font-family: ${({ theme }) => theme.fonts.default};
  font-size: ${({ theme }) => theme.fontSize.regular};
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  border-color: ${({ theme }) => theme.colors.primary};
  transition: all ${({ theme }) => theme.transition.easingQuick} ease-in-out;
  font-weight: bold;
  box-shadow: ${({ theme }) => theme.shadows.default};

  ${({ disabled }) =>
    !disabled &&
    css`
      :hover,
      :focus {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${props => props.theme.colors.white};
        text-decoration: none;
      }
    `}

  :active {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) =>
      theme.util.darkenOnActive(theme.colors.primary)};
    border-color: ${props =>
      props.theme.util.darkenOnActive(props.theme.colors.primary)};
  }

  ${({ size }) =>
    size === 'small' &&
    css`
      font-size: 12px;
      padding: calc(${defaultYPadding} * 0.7) calc(${defaultXPadding} * 0.8);
    `}

  ${({ size }) =>
    size === 'large' &&
    css`
      padding: calc(${defaultYPadding} * 1.4) calc(${defaultXPadding} * 2);
    `}

  ${({ size }) =>
    size === 'block' &&
    css`
      width: 100%;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: default;
      pointer-events: none;
    `}

  ${({ theme, loading }) =>
    loading &&
    css`
      color: transparent !important;
      pointer-events: none;
      position: relative;

      :after {
        animation: ${rotate360} 0.5s linear infinite;
        border: 0.1rem solid ${theme.colors.primary};
        border-radius: 50%;
        border-right-color: transparent;
        border-top-color: transparent;
        content: '';
        display: block;
        height: 0.8rem;
        left: 50%;
        margin-left: -0.4rem;
        margin-top: -0.4rem;
        position: absolute;
        top: 50%;
        width: 0.8rem;
        z-index: 1;
      }
    `}

  ${({ theme, color, loading }) =>
    color === 'primary' &&
    css`
      color: ${theme.colors.light};
      background-color: ${theme.colors.primary};
      border-color: ${theme.colors.primary};

      :visited {
        color: ${theme.colors.light};
      }

      ${({ disabled }) =>
        !disabled &&
        css`
          :hover,
          :focus {
            color: ${theme.colors.light};
            background-color: ${theme.util.darkenOnHover(theme.colors.primary)};
            border-color: ${theme.util.darkenOnHover(theme.colors.primary)};
          }
        `} :active {
        color: ${theme.colors.light};
        background-color: ${theme.util.darkenOnActive(theme.colors.primary)};
        border-color: ${theme.util.darkenOnActive(theme.colors.primary)};
      }

      ${loading &&
        css`
          :after {
            border: 0.1rem solid ${theme.colors.light};
            border-radius: 50%;
            border-right-color: transparent;
            border-top-color: transparent;
          }
        `};
    `}

  ${({ theme, color, loading }) =>
    color === 'accent' &&
    css`
      color: ${theme.colors.light};
      background-color: ${theme.colors.accent};
      border-color: ${theme.colors.accent};

      :visited {
        color: ${theme.colors.light};
      }

      ${({ disabled }) =>
        !disabled &&
        css`
          :hover,
          :focus {
            color: ${theme.colors.light};
            background-color: ${theme.util.darkenOnHover(theme.colors.accent)};
            border-color: ${theme.util.darkenOnHover(theme.colors.accent)};
          }
        `} :active {
        color: ${theme.colors.light};
        background-color: ${theme.util.darkenOnActive(theme.colors.accent)};
        border-color: ${theme.util.darkenOnActive(theme.colors.accent)};
      }

      ${loading &&
        css`
          :after {
            border: 0.1rem solid ${theme.colors.light};
            border-radius: 50%;
            border-right-color: transparent;
            border-top-color: transparent;
          }
        `};
    `}

  ${({ theme, color, loading }) =>
    color === 'white' &&
    css`
      color: ${theme.colors.primary};
      background-color: ${theme.colors.white};
      border-color: ${theme.colors.white};

      :visited {
        color: ${theme.colors.primary};
      }

      ${({ disabled }) =>
        !disabled &&
        css`
          :hover,
          :focus {
            color: ${theme.colors.white};
            background-color: ${theme.colors.primary};
            border-color: ${theme.colors.primary};
          }
        `} :active {
        color: ${theme.colors.primary};
        background-color: ${theme.colors.white};
        border-color: ${theme.colors.white};
      }

      ${loading &&
        css`
          :after {
            border: 0.1rem solid ${theme.colors.white};
            border-radius: 50%;
            border-right-color: transparent;
            border-top-color: transparent;
          }
        `};
    `}

  ${({ theme, color }) =>
    color === 'link' &&
    css`
      color: ${theme.colors.primary};
      background: none;
      border: none;
      box-shadow: none;

      :visited {
        color: ${theme.colors.primary};
      }

      ${({ disabled }) =>
        !disabled &&
        css`
          :hover,
          :focus {
            color: ${theme.util.darkenOnHover(theme.colors.primary)};
            background-color: transparent;
            border: none;
          }
        `} :active {
        color: ${theme.util.darkenOnActive(theme.colors.primary)};
        background-color: transparent;
        border: none;
      }
    `}

    ${({ rounded }) =>
      rounded &&
      css`
        height: 50px;
        width: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
`;

const ButtonComponent = ({
  id,
  onClick,
  children,
  type,
  size,
  color,
  disabled,
  loading,
  rounded,
  style,
}) => (
  <StyledButton
    id={id || `btn-${kebabCase(children)}`}
    onClick={() => onClick()}
    type={type}
    size={size}
    color={color}
    disabled={disabled}
    loading={loading}
    style={style}
    rounded={rounded}
  >
    {children}
  </StyledButton>
);

ButtonComponent.propTypes = {
  id: PropTypes.string, // for later, when we want to track clicks
  onClick: PropTypes.func,
  children: PropTypes.any.isRequired,
  type: PropTypes.string,
  style: PropTypes.object,

  size: PropTypes.oneOf(['small', 'large', 'block']),
  color: PropTypes.oneOf(['primary', 'accent', 'link', 'white']),
  rounded: PropTypes.bool,

  // states
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

ButtonComponent.defaultProps = {
  id: null,
  type: 'button',
  rounded: false,
  style: {},
  onClick: () => {},
  size: null,
  color: null,
  disabled: false,
  loading: false,
};

export default ButtonComponent;
