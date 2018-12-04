import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const PTag = styled.p`
  font-size: ${({ theme }) => theme.fontSize.regular};

  ${({ font }) =>
    font === 'default' &&
    css`
      font-family: ${({ theme }) => theme.fonts.default};
    `}

  ${({ font }) =>
    font === 'serif' &&
    css`
      font-family: ${({ theme }) => theme.fonts.serif};
    `}

  ${({ size }) =>
    size === 'small' &&
    css`
      font-size: ${({ theme }) => theme.fontSize.small};
    `}

  ${({ size }) =>
    size === 'large' &&
    css`
      font-size: calc(${({ theme }) => theme.fontSize.large} - 0.1rem);

      @media only screen and (min-width: ${({ theme }) => theme.sizes.sm}) {
        font-size: ${({ theme }) => theme.fontSize.large};
      }
    `}

  ${({ align }) => css`
    text-align: ${align};
  `}

  ${({ color }) =>
    color === 'muted' &&
    css`
      color: ${({ theme }) => theme.colors.gray};
    `}

  ${({ color }) =>
    color === 'primary' &&
    css`
      color: ${({ theme }) => theme.colors.primary};
    `}

  ${({ color }) =>
    color === 'error' &&
    css`
      color: ${({ theme }) => theme.colors.error};
    `}
`;

const SpanTag = styled(PTag.withComponent('span'))`
  margin: 0px;
`;

const P = ({ tag, children, font, size, align, ...rest }) => {
  const UseTag = tag === 'span' ? SpanTag : PTag;
  return (
    <UseTag font={font} size={size} align={align} {...rest}>
      {children}
    </UseTag>
  );
};

P.propTypes = {
  children: PropTypes.any.isRequired,
  tag: PropTypes.string,
  font: PropTypes.oneOf(['default', 'serif']),
  size: PropTypes.oneOf(['small', 'regular', 'large']),
  color: PropTypes.oneOf(['default', 'muted', 'primary', 'error']),
  align: PropTypes.oneOf(['', 'left', 'right', 'center', 'justify']),
};

P.defaultProps = {
  tag: 'P',
  font: 'default',
  size: 'regular',
  color: 'default',
  align: '',
};

export const Span = props => <P tag="span" {...props} />;

export default P;
