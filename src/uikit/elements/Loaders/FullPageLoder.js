import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import withPortal from 'hoc/withPortal';

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
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid ${theme.colors.primary}; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: ${spin} 2s linear infinite;
  `}
`;

const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: ${theme.colors.white};
  `}
`;

const FullPageLoader = () => (
  <Container>
    <Loader />
  </Container>
);

export default withPortal(FullPageLoader, 'full-page-loader-root');
