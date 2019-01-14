import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Container from 'uikit/blocks/Container';
import Alert from 'uikit/blocks/Alert';
import Link from 'uikit/elements/Link';
import Heading from 'uikit/elements/Heading';

const Layout = styled(Container)`
  height: 100vh;
  display: grid;
  text-align: center;
  grid-template-rows: 30% 70%;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`;

const Text = styled.div`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.fontSize.regular};
    margin-left: ${theme.margin.md};
    margin-right: ${theme.margin.md};
    margin-bottom: ${theme.margin.md};
  `}
`;

const NotVerified = ({ reason }) => (
  <Layout>
    <Header>
      <Heading level="title">Healfit</Heading>
    </Header>
    <Div>
      <Alert type="error">{reason}</Alert>
      <Text>
        If this error keeps happening please contact us at hello@healfit.co.uk
        we
        {"'"}ll get back to you as soon as possible
      </Text>
      <Link to="/" component="button" color="primary">
        Back To Home
      </Link>
    </Div>
  </Layout>
);

NotVerified.propTypes = {
  reason: PropTypes.string.isRequired,
};

export default NotVerified;
