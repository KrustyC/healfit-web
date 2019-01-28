import styled, { css } from 'styled-components';
import { Field } from 'formik';

const Input = styled(Field)`
  ${({ theme, noMargin, type }) => css`
    width: 100%;
    outline: none;
    height: 45px;
    min-height: 45px;
    margin-bottom: ${noMargin ? 0 : '10px'};
    display: flex;
    justify-content: center;

    padding: 0px ${theme.padding.sm};
    border: 2px solid ${theme.colors.border};
    border-radius: 2px;
    font-size: ${theme.fontSize.regular};
    color: ${theme.colors.font};

    :focus {
      border: 2px solid ${theme.colors.primary};
    }

    ${type === 'number' &&
      css`
        width: 70px;
      `}
  `}
`;

export default Input;
