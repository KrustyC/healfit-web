import styled, { css } from 'styled-components';

const Feedback = styled.span`
  color: red;
  margin-top: -10px;
  font-size: 10px;
  display: none;
  ${({ show }) =>
    show &&
    css`
      display: block;
    `}
`;

export default Feedback;
