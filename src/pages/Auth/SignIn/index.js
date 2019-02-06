import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import gql from 'graphql-tag';
import PossibleStates from 'possible-states';
import { compose, graphql } from 'react-apollo';
import withAuth from 'helpers/withAuth';

import Heading from 'uikit/elements/Heading';
import Link from 'uikit/elements/Link';
import P from 'uikit/elements/P';

import Form from './Form';
import {
  Container,
  Header,
  Bottom,
  Frame,
  FormSide,
  ImgSide,
  FormContainer,
  StyledAlert,
} from '../components';

class SignIn extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,
    setCurrentAccount: PropTypes.func.isRequired,
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

  onHandleSubmit = async (values, { resetForm }) => {
    try {
      const result = await this.props.login({ variables: values });
      const { account, token } = result.data.login;

      await this.props.setCurrentAccount({ variables: { user: account } });
      localStorage.setItem('healfit:token', token);
      return this.setState(({ ui }) => ({ ui: ui.toAuthenticated() }));
    } catch (error) {
      const errors = error.graphQLErrors.map(x => x.message);
      this.setState(({ ui }) => ({ ui: ui.toError(errors[0]) }));
      resetForm();
      return setTimeout(
        () => this.setState(({ ui }) => ({ ui: ui.toIdle() })),
        3000
      );
    }
  };

  render() {
    const { ui } = this.state;

    if (ui.current() === 'authenticated') {
      return <Redirect to="/dashboard" />;
    }

    return (
      <Container>
        {/* eslint-disable-next-line global-require */}
        <ImgSide url={require('assets/images/login.jpg')} />
        <FormSide>
          <Header>
            <Heading level="title">Healfit</Heading>
          </Header>
          <Frame>
            <FormContainer>
              {ui.whenError(({ reason }) => (
                <StyledAlert type="error">{reason}</StyledAlert>
              ))}
              <Form onSubmit={this.onHandleSubmit} />
              <P size="small">
                Do you not have an account yet?{' '}
                <Link to="/auth/signup">Sign Up</Link>
              </P>
            </FormContainer>
          </Frame>
          <Bottom />
        </FormSide>
      </Container>
    );
  }
}

const LOGIN = gql`
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

const SET_CURRENT_ACCOUNT = gql`
  mutation setCurrentAccount($account: Object) {
    setCurrentAccount(account: $account) @client
  }
`;

export default compose(
  graphql(LOGIN, { name: 'login' }),
  graphql(SET_CURRENT_ACCOUNT, { name: 'setCurrentAccount' }),
  withAuth
)(SignIn);
