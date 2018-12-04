import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const SolidHR = styled.hr`
  ${({ theme }) => css`
    border: none;
    border-top: 1px solid ${theme.colors.borderColor};
    margin: ${theme.spaces.large} 0;
  `}
`;

const HR = styled.hr`
  width: 100%;

  display: block;
  border: none;
  text-align: center;
  overflow: visible;
  margin: ${({ theme }) => theme.spaces.large} 0;

  ${({ increaseMargin }) =>
    increaseMargin &&
    css`
      margin: calc(${({ theme }) => theme.spaces.large} * 1.5) 0;
    `} &:before {
    content: '...';
    display: inline-block;
    margin-left: 0.6em;
    color: rgba(0, 0, 0, 0.68);
    position: relative;
    top: -30px;

    --x-height-multiplier: 0.342;
    --baseline-multiplier: 0.22;
    font-family: $blogContentFont;
    font-weight: 400;
    font-style: normal;
    font-size: 30px;
    letter-spacing: 0.6em;
  }
`;

const HRComponent = ({ solid, increaseMargin, ...rest }) =>
  solid ? (
    <SolidHR {...rest} />
  ) : (
    <HR {...rest} increaseMargin={increaseMargin} />
  );

HRComponent.propTypes = {
  solid: PropTypes.bool,
  increaseMargin: PropTypes.bool,
};

HRComponent.defaultProps = {
  solid: false,
  increaseMargin: false,
};

export default HRComponent;
