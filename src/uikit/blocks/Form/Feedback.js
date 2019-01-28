import React from 'react';
import styled, { css } from 'styled-components';

import { ErrorMessage } from 'formik';

const StyledFeedback = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font-size: ${theme.fontSize.xsmall};
    position: absolute;
    bottom: 0;
    left: 0;
  `}
`;

const Feedback = props => (
  <ErrorMessage {...props}>
    {msg => <StyledFeedback>{msg}</StyledFeedback>}
  </ErrorMessage>
);

export default Feedback;
