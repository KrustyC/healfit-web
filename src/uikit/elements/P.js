import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const P = styled.p`
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
      color === 'white' &&
      css`
        color: ${({ theme }) => theme.colors.white};
      `}

  ${({ color }) =>
    color === 'error' &&
    css`
      color: ${({ theme }) => theme.colors.error};
    `}
`;

P.propTypes = {
  children: PropTypes.any.isRequired,
  as: PropTypes.string,
  font: PropTypes.oneOf(['default', 'serif']),
  size: PropTypes.oneOf(['small', 'regular', 'large']),
  color: PropTypes.oneOf(['default', 'muted', 'primary', 'error', 'white']),
  align: PropTypes.oneOf(['', 'left', 'right', 'center', 'justify']),
};

P.defaultProps = {
  as: 'p',
  font: 'default',
  size: 'regular',
  color: 'default',
  align: '',
};

export default P;
