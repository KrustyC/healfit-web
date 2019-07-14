import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { switchProp } from 'styled-tools';
import { Uikon } from '@duik';

const Icon = styled(Uikon)`
  ${({ theme, clickable }) => css`
    margin-right: 2px;
    color: ${theme.colors.accent};

    &:last-of-type {
      margin-right: 0;
    }

    ${clickable === 'yes' &&
      css`
        cursor: pointer;
      `}

    ${switchProp('size', {
      small: css`
        font-size: 12px !important;
      `,
      regular: css`
        font-size: 20px !important;
      `,
      large: css`
        font-size: 26px !important;
      `,
    })}
  `}
`;

const Star = ({ size, clickable, isFilled, onEnter, onLeave, onSelect }) => (
  <Icon
    size={size}
    clickable={clickable ? 'yes' : 'no'}
    onMouseEnter={onEnter}
    onMouseLeave={onLeave}
    onClick={clickable ? onSelect : null}
  >
    {isFilled ? 'star_fill' : 'star'}
  </Icon>
);

Star.propTypes = {
  size: PropTypes.oneOf(['small', 'regular', 'large']).isRequired,
  clickable: PropTypes.bool.isRequired,
  isFilled: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired,
};

export default Star;
