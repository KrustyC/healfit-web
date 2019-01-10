import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import gql from 'graphql-tag';
import PossibleStates from 'possible-states';
import { compose, graphql } from 'react-apollo';
import { withAuth } from 'app/apollo/auth';

import Heading from 'uikit/elements/Heading';
import Link from 'uikit/elements/Link';

import Layout from './Layout';
import Form from './Form';

const Frame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  width: 100%;
  font-size: 12px;
  text-align: center;
`;

const LoginMutation = gql`
  mutation login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      token
      account {
        firstName
        lastName
      }
    }
  }
`;

class SignIn extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,
    setCurrentUser: PropTypes.func.isRequired,
  };

  state = {
    ui: PossibleStates('idle', 'error<reason>', 'authenticated'),
  };

  componentDidMount() {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      this.setState(({ ui }) => ({ ui: ui.toAuthenticated() }));
    }
  }

  onHandleSubmit = async values => {
    try {
      const result = await this.props.login({ variables: values });
      const { account, token } = result.data.login;

      await this.props.setCurrentUser({ variables: { user: account } });
      localStorage.setItem('healfit:token', token);
      return this.setState(({ ui }) => ({ ui: ui.toAuthenticated() }));
    } catch (error) {
      return this.setState(({ ui }) => ({ ui: ui.toError(error) }));
    }
  };

  render() {
    const { ui } = this.state;

    if (ui.current() === 'authenticated') {
      return <Redirect to="/dashboard" />;
    }

    return (
      <Layout>
        {ui.whenError(() => (
          <h1>Error</h1>
        ))}
        <Frame>
          <Heading level="title">Healfit</Heading>
          <Form onSubmit={this.handleSubmit} />
          <Text>
            Do you not have an account yet?{' '}
            <Link to="/auth/signup" style={{ fontWeight: 'bold' }}>
              Sign Up
            </Link>
          </Text>
        </Frame>
      </Layout>
    );
  }
}

export default compose(
  graphql(LoginMutation, { name: 'login' }),
  withAuth
)(SignIn);
