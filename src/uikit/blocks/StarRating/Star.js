import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Uikon } from '@duik';

const Icon = styled(Uikon)`
  ${({ theme, clickable }) => css`
    height: 16px !important;
    margin-right: 2px;
    color: ${theme.colors.accent};

    ${clickable &&
      css`
        cursor: pointer;
      `}
  `}
`;

const Star = ({ isClickable, isFilled, onEnter, onLeave, onSelect }) => (
  <Icon
    clickable={isClickable}
    onMouseEnter={onEnter}
    onMouseLeave={onLeave}
    onClick={onSelect}
  >
    {isFilled ? 'star_fill' : 'star'}
  </Icon>
);

Star.propTypes = {
  isClickable: PropTypes.bool.isRequired,
  isFilled: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired,
};

export default Star;
