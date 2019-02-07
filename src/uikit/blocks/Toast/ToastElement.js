import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { switchProp, prop } from 'styled-tools';
import posed from 'react-pose';

const Button = styled.div`
  cursor: pointer;
  flex-shrink: 0;
  opacity: 0.5;
  transition: opacity 150ms;
  :hover {
    opacity: 1;
  }
`;

const Content = styled.div`
  ${({ theme }) => css`
    flex-grow: 1;
    font-size: 14;
    line-height: 1.4;
    min-height: 40;
    padding: ${theme.padding.sm};
  `}
`;

const Toast = styled(
  posed.div({
    closed: {
      y: '0px',
      transition: {
        y: { type: 'spring', stiffness: 200, damping: 80 },
      },
    },
    open: {
      y: '100px',
    },
  })
)`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.175);
    margin-bottom: ${theme.margin.sm};
    padding: 0 ${theme.padding.sm};
    transition: transform 500ms cubic-bezier(0.2, 0, 0, 1);
    border-radius: 5px;
    font-weight: bold;

    ${switchProp(prop('type', 'default'), {
      default: css`
        background: ${theme.colors.primary};
        color: ${theme.colors.white};
      `,
      success: css`
        background: ${theme.colors.success};
        color: ${theme.colors.white};
      `,
      error: css`
        background: ${theme.colors.error};
        color: ${theme.colors.white};
      `,
      warning: css`
        background: ${theme.colors.warning};
        color: ${theme.colors.white};
      `,
    })}
  `}
`;

const Item = posed.li({
  enter: { opacity: 1, x: 0 },
});

const ToastElement = ({ type, children, onDismiss }) => (
  <Item type={type} initialPose="open" pose="closed">
    <Content>{children}</Content>
    {onDismiss && (
      <Button onClick={onDismiss} role="button">
        close
      </Button>
    )}
  </Item>
);

ToastElement.propTypes = {
  type: PropTypes.oneOf(['default', 'success', 'error', 'danger']),
  children: PropTypes.any.isRequired,
  onDismiss: PropTypes.func.isRequired,
};

ToastElement.defaultProps = {
  type: 'default',
};

export default ToastElement;
