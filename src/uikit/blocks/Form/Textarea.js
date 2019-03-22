import styled, { css } from 'styled-components';
import { prop, switchProp } from 'styled-tools';

const StyledTextarea = styled.textarea`
  ${({ theme }) => css`
    width: ${prop('width', '100%')};
    outline: none;
    margin-top: ${theme.margin.xs};
    display: flex;
    justify-content: center;
    align-items: flex-start;
    border: 2px solid ${theme.colors.border};
    border-radius: 2px;
    color: ${theme.colors.font};
    background: ${theme.colors.white};
    padding: ${theme.padding.xs} ${theme.padding.sm};
    resize: none;
    ${switchProp(prop('size', 'regular'), {
      small: css`
        font-size: ${theme.fontSize.small};
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
  `}
`;

export default StyledTextarea;
