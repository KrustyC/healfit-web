import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const ContainerDiv = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spaces.regular};

  ${({ theme, size }) => css`
    max-width: ${theme.dimensions.containerWidth[size]};
  `} ${({ paddingVertical }) =>
    paddingVertical &&
    css`
      padding-top: ${({ theme }) => theme.spaces.large};
      padding-bottom: ${({ theme }) => theme.spaces.large};
    `};
`;

const Container = ({ children, size, paddingVertical, ...rest }) => (
  <ContainerDiv size={size} paddingVertical={paddingVertical} {...rest}>
    {children}
  </ContainerDiv>
);

Container.propTypes = {
  children: PropTypes.any.isRequired,
  size: PropTypes.oneOf(['xsmall', 'small', 'default', 'large', 'fullscreen']),
  paddingVertical: PropTypes.bool,
};

Container.defaultProps = {
  size: 'default',
  paddingVertical: false,
};

export default Container;
