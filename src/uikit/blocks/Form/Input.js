import styled, { css } from 'styled-components';
import { prop, switchProp } from 'styled-tools';

const Input = styled.input`
  ${({ theme, noMargin }) => css`
    width: ${prop('width', '100%')};
    outline: none;
    height: 45px;
    margin-bottom: ${noMargin ? 0 : '10px'};
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
      `,
      large: css`
        font-size: ${theme.fontSize.large};
      `,
    })}

    :focus {
      border: 2px solid ${theme.colors.primary};
    }

    &[type='number'] {
      /* width: 500px; */
    }
  `}
`;

export default Input;
