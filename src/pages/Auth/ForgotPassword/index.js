import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Helmet } from 'react-helmet';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Heading from 'uikit/elements/Heading';
import P from 'uikit/elements/P';
import StyledForm from 'uikit/blocks/Form';
import Completed from './Completed';

import Form from './Form';

const ForgotPasswordMutation = gql`
  mutation forgottenPassword($email: String!) {
    forgottenPassword(input: { email: $email })
  }
`;

const Layout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  ${({ theme }) => css`
    flex: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: min-content;

    @media (max-width: ${theme.sizes.md}) {
      flex: 4;
    }
  `}
`;

const Main = styled.div`
  ${({ theme }) => css`
    flex: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: min-content;
    height: 100%;
    width: ${theme.dimensions.containerWidth.small};
    ${StyledForm} {
      width: 85%;
    }

    @media (max-width: ${theme.sizes.md}) {
      width: 100%;
      flex: 6;
    }
  `}
`;

const Bottom = styled.div`
  ${({ theme }) => css`
    flex: 2;
    @media (max-width: ${theme.sizes.md}) {
      flex: 1;
    }
  `}
`;

class ForgotPassword extends Component {
  static propTypes = {
    forgottenPassword: PropTypes.func.isRequired,
  };

  state = {
    completed: false,
  };

  onSubmit = async values => {
    try {
      await this.props.forgottenPassword({ variables: values });
      this.setState({ completed: true });
    } catch (_) {
      this.setState({ completed: true });
    }
  };

  render() {
    const { completed } = this.state;
    return (
      <>
        <Helmet>
          <title>Forgot Password | Healfit</title>
          <meta
            name="description"
            content="Did you forget your password? No worries!"
          />
        </Helmet>
        <Layout>
          <Header>
            <Heading level="title" align="center">
              Healfit
            </Heading>
            <Heading level="h1" align="center">
              Reset Your Password
            </Heading>
            <P align="center">
              Did you forget your password? No worries, you can change it in
              less than a minute!
            </P>
          </Header>
          <Main>
            {!completed ? <Form onSubmit={this.onSubmit} /> : <Completed />}
          </Main>
          <Bottom />
        </Layout>
      </>
    );
  }
}

export default graphql(ForgotPasswordMutation, { name: 'forgottenPassword' })(
  ForgotPassword
);
