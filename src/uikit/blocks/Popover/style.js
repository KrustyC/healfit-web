import styled, { css } from 'styled-components';
import {
  calculateLeft,
  calculateBottom,
  calculateWidth,
  calculateTop,
  calculateRight,
  calculateHeight,
} from './utils';

const getAlignment = (dimension, position) => {
  switch (position) {
    case 'top': {
      return css`
        left: ${calculateLeft(dimension, position)}px;
        bottom: ${calculateBottom(dimension, position)}px;
        width: ${calculateWidth(dimension, position)}px;
      `;
    }
    case 'right': {
      return css`
        left: ${calculateLeft(dimension, position)}px;
        top: ${calculateTop(dimension, position)}px;
        height: ${calculateHeight(dimension, position)}px;
      `;
    }
    case 'bottom': {
      return css`
        left: ${calculateLeft(dimension, position)}px;
        top: ${calculateTop(dimension, position)}px;
        width: ${calculateWidth(dimension, position)}px;
      `;
    }
    case 'left': {
      return css`
        right: ${calculateRight(dimension, position)}px;
        top: ${calculateTop(dimension, position)}px;
        height: ${calculateHeight(dimension, position)}px;
      `;
    }

    default:
      throw new Error('Please specify an allowed position');
  }
};

const getArrowAlignment = position => {
  switch (position) {
    case 'top': {
      return css`
        top: 100%; /* At the bottom of the tooltip */
        left: 50%;
        margin-left: -5px;
        border-width: 10px;
        border-color: #d5d5d5 transparent transparent transparent;
      `;
    }
    case 'right': {
      return css`
        top: 50%; /* At the bottom of the tooltip */
        right: 100%;
        margin-top: -10px;
        border-width: 10px;
        border-color: transparent #d5d5d5 transparent transparent;
      `;
    }
    case 'bottom': {
      return css`
        bottom: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 10px;
        border-color: transparent transparent #d5d5d5 transparent;
      `;
    }
    case 'left': {
      return css`
        top: 50%; /* At the bottom of the tooltip */
        left: 100%;
        margin-top: -10px;
        border-width: 10px;
        border-color: transparent transparent transparent #d5d5d5;
      `;
    }

    default:
      throw new Error('Please specify an allowed position');
  }
};

export const Container = styled.div`
  ${({ dimension, position }) => css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    ${getAlignment(dimension, position)};

    ::after {
      content: ' ';
      position: absolute;
      border-style: solid;
      ${getArrowAlignment(position)};
    }
  `}
`;

export const Main = styled.div`
  border-radius: 5px;
  border: 1px solid #d5d5d5;
`;
