import styled, { css } from 'styled-components';
import Feedback from './Feedback';

const Input = styled.input`
  width: 100%;
  outline: none;
  height: 50px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;

  ${({ theme }) => css`
    padding: 0px 5px;
    border: 2px solid ${theme.colors.border};
    border-radius: 2px;
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
