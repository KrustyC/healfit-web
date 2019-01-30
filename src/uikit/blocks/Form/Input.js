import styled, { css } from 'styled-components';

const Input = styled.input`
  ${({ theme, noMargin }) => css`
    width: 100%;
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
    font-size: ${theme.fontSize.regular};
    color: ${theme.colors.font};
    background: ${theme.colors.white};

    :focus {
      border: 2px solid ${theme.colors.primary};
    }

    &[type='number'] {
      /* width: 500px; */
    }
  `}
`;

export default Input;
