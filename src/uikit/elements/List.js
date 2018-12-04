import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const OLTag = styled.ol`
  font-family: ${({ theme }) => theme.fonts.default};
  font-size: ${({ theme }) => theme.fontSize.default};
  list-style-position: outside;

  ${({ font }) =>
    font === 'serif' &&
    css`
      font-family: ${({ theme }) => theme.fonts.serif};
    `};

  ${({ size }) =>
    size === 'small' &&
    css`
      font-size: ${({ theme }) => theme.fontSize.small};
    `} ${({ size }) =>
    size === 'large' &&
    css`
      font-size: calc(${({ theme }) => theme.fontSize.large} - 0.1rem);

      @media only screen and (min-width: ${({ theme }) => theme.sizes.sm}) {
        font-size: ${({ theme }) => theme.fontSize.large};
      }
    `};
`;

const ULTag = OLTag.withComponent('ul');

const List = ({ children, type, font, size }) => {
  const Tag = type === 'unordered' ? ULTag : OLTag;
  return (
    <Tag font={font} size={size}>
      {children}
    </Tag>
  );
};

List.propTypes = {
  children: PropTypes.any.isRequired,
  type: PropTypes.oneOf(['ordered', 'unordered']),
  font: PropTypes.oneOf(['default', 'serif']),
  size: PropTypes.oneOf(['small', 'default', 'large']),
};

List.defaultProps = {
  type: 'ordered',
  font: 'default',
  size: 'default',
};

export default List;
