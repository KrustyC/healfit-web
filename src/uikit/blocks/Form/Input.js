import styled, { css } from 'styled-components';
import Feedback from './Feedback';

const Input = styled.input`
  width: 100%;
  outline: none;

  ${({ theme }) => css`
    padding: 10px 3px;
    border: 2px solid ${theme.colors.border};
    border-radius: 5px;
  `}

  :focus {
    border: 2px solid black;
  }

  :invalid {
    ${Feedback} {
      display: block;
    }
  }
`;

export default Input;
