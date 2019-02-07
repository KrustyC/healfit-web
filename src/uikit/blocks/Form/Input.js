import styled, { css } from 'styled-components';
import { prop, switchProp } from 'styled-tools';

const Input = styled.input`
  ${({ theme, noMargin }) => css`
    width: ${prop('width', '100%')};
    outline: none;
    height: 45px;
    min-height: 45px;
    margin-bottom: ${noMargin ? 0 : '10px'};
    display: flex;
    justify-content: center;
    align-items: flex-start;

    padding: 0px ${theme.padding.sm};
    border: 2px solid ${theme.colors.border};
    border-radius: 2px;
    color: ${theme.colors.font};
    background: ${theme.colors.white};

    font-size: ${switchProp(prop('size', 'regular'), {
      small: theme.fontSize.small,
      regular: theme.fontSize.regular,
      large: theme.fontSize.large,
    })};

    :focus {
      border: 2px solid ${theme.colors.primary};
    }

    &[type='number'] {
      /* width: 500px; */
    }
  `}
`;

export default Input;
