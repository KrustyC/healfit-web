import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { history } from 'app/router';

import Alert from 'uikit/blocks/Alert';
import Button from 'uikit/blocks/Button';
import Heading from 'uikit/elements/Heading';
import P from 'uikit/elements/P';

const Layout = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    display: grid;
    text-align: center;
    grid-template-rows: 30% 70%;
    align-items: center;
    justify-content: center;

    width: ${theme.dimensions.containerWidth.small};
    margin: 0 auto;

    @media (max-width: ${theme.sizes.md}) {
      width: ${theme.dimensions.containerWidth.fullscreen};
    }
  `}
`;

const Header = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    padding: 0 ${theme.padding.md};
  `}
`;

const NotVerified = ({ reason }) => (
  <Layout>
    <Header>
      <Heading level="title">Healfit</Heading>
    </Header>
    <Main>
      <Alert type="error">{reason}</Alert>
      <P align="center">
        If this error keeps happening please contact us at hello@healfit.co.uk
        we
        {"'"}ll get back to you as soon as possible
      </P>
      <Button size="large" onClick={() => history.push('/')} color="primary">
        Back To Home
      </Button>
    </Main>
  </Layout>
);

NotVerified.propTypes = {
  reason: PropTypes.string.isRequired,
};

export default NotVerified;
