import styled, { css } from 'styled-components';
import Feedback from './Feedback';

const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    outline: none;
    height: 50px;
    min-height: 50px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;

    padding: 0px 5px;
    border: 2px solid ${theme.colors.border};
    border-radius: 2px;

    :focus {
      border: 2px solid ${theme.colors.primary};
    }

    :invalid {
      ${Feedback} {
        display: block;
      }
    }
  `}
`;

export default Input;
