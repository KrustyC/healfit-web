import styled, { css } from 'styled-components';
import { prop, switchProp } from 'styled-tools';

const Input = styled.input`
  ${({ theme }) => css`
    width: ${prop('width', '100%')};
    outline: none;
    height: 45px;
    margin-top: ${theme.margin.xs};
    display: flex;
    justify-content: center;
    align-items: flex-start;
    border: 2px solid ${theme.colors.border};
    border-radius: 2px;
    color: ${theme.colors.font};
    background: ${theme.colors.white};
    padding: 0px ${theme.padding.sm};

    ${switchProp(prop('size', 'regular'), {
      small: css`
        font-size: ${theme.fontSize.small};
        height: 30px;
        min-height: 30px;
      `,
      regular: css`
        font-size: ${theme.fontSize.regular};
        height: 50px;
        min-height: 50px;
      `,
      large: css`
        font-size: ${theme.fontSize.large};
      `,
    })}

    :focus {
      border: 2px solid ${theme.colors.primary};
    }

    &[type='number']::-webkit-outer-spin-button,
    &[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type='number'] {
      -moz-appearance: textfield;
    }
  `}
`;

export default Input;
