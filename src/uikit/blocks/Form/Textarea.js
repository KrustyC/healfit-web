import styled, { css } from 'styled-components';
import { prop } from 'styled-tools';

const StyledTextarea = styled.textarea`
  ${({ theme }) => css`
    width: ${prop('width', '100%')};
    padding: ${theme.padding.sm};
    width: 100%;
    outline: none;
    height: 45px;
    min-height: 45px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    border: 2px solid ${theme.colors.border};
    border-radius: 2px;
    font-size: ${theme.fontSize.regular};
    color: ${theme.colors.font};
    background: ${theme.colors.white};

    :focus {
      border: 2px solid ${theme.colors.primary};
    }
  `}
`;

export default StyledTextarea;
