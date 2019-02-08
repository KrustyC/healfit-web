import React from 'react';
import styled, { css } from 'styled-components';
import history from 'app/router/history';

import Button from 'uikit/blocks/Button';

const Layout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('/assets/images/undrawn/finish-line.svg');
  background-repeat: no-repeat;
  background-position: center;
`;

const Div = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${theme.padding.md};
    background: rgba(255, 255, 255, 0.8);
  `}
`;

const Title = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.large};
    text-align: center;
  `}
`;

const Text = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.regular};
    text-align: center;
  `}
`;

export default () => (
  <Layout>
    <Div>
      <Title>
        Your Healfit account has been verified!
        <br />
      </Title>
      <Text>We are very excited to have you on board!</Text>
      <br />
      <Button
        size="large"
        onClick={() => history.push('/auth/signin')}
        color="primary"
      >
        Login
      </Button>
    </Div>
  </Layout>
);
