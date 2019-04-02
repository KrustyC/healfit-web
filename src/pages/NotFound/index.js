import React from 'react';
import styled, { css } from 'styled-components';
import history from 'app/router/history';
import { Helmet } from 'react-helmet';

import Heading from 'uikit/elements/Heading';
import P from 'uikit/elements/P';
import Button from 'uikit/blocks/Button';

const img = require('assets/images/undrawn/taken.svg');

const Small = styled.div`
  ${({ theme }) => css`
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    @media (max-width: ${theme.sizes.sm}) {
      display: flex;
    }
  `}
`;

const Standard = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    align-items: center;
    justify-content: center;
    @media (max-width: ${theme.sizes.sm}) {
      display: none;
    }
  `}
`;

const Layout = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Box = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: ${theme.padding.md} 0;
  `}
`;

const TextBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-bottom: ${theme.margin.sm};

    p {
      margin-top: ${theme.margin.xs};
    }

    @media (max-width: ${theme.sizes.sm}) {
      align-items: center;
    }
  `}
`;

const Img = styled.img`
  ${({ theme }) => css`
    width: 95vw;
    margin: ${theme.margin.lg} 0;
    @media (max-width: ${theme.sizes.sm}) {
      align-items: center;
    }
  `}
`;

const Text = () => (
  <TextBox>
    <Heading
      level="title"
      color="primary"
      style={{ fontWeight: 'bold', margin: 0 }}
    >
      Oops..
    </Heading>
    <P size="large">Looks like you are lost?</P>
  </TextBox>
);

const Page404 = () => (
  <>
    <Helmet>
      <title>404 | Healfit</title>
    </Helmet>
    <Layout>
      <Small>
        <Text />
        <Img src={img} />
        <Button squircled color="primary" size="large">
          BACK HOME
        </Button>
      </Small>
      <Standard>
        <Box>
          <Text />
          <Button
            squircled
            color="primary"
            size="large"
            onClick={() => history.push('/')}
          >
            Back Home
          </Button>
        </Box>
      </Standard>
    </Layout>
  </>
);

export default Page404;
