import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import Container from 'uikit/blocks/Container';

const Layout = styled(Container)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const pulsate = keyframes`
  0% { 
    opacity: 0.5;
  }

  50% { 
    opacity: 1.0;
  }

  100% { 
    opacity: 0.5;
  }
`;

const Text = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.large};
    animation: ${pulsate} 2s linear infinite;
  `}
`;

export default () => (
  <Layout>
    <Text>Verifying your account...</Text>
  </Layout>
);
