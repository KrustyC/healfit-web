import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  ${({ theme }) => css`
    border: 10px solid #f3f3f3; /* Light grey */
    border-top: 10px solid ${theme.colors.primary}; /* Blue */
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: ${spin} 2s linear infinite;
  `}
`;

export default () => (
  <Box>
    <Loader />
  </Box>
);
