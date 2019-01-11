import React, { Component } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import PossibleStates from 'possible-states';
import styled from 'styled-components';

import Alert from 'uikit/blocks/Alert';
import Heading from 'uikit/elements/Heading';
import Form from './Form';
import Layout from './Layout';
import Success from './Success';

const Frame = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledAlert = styled(Alert)`
  margin-top: 20px;
  margin-bottom: -20px;
`;

const USER_TYPE = 1;

const SignupMutation = gql`
  mutation signup(
    $email: String!
    $firstName: String!
    $lastName: String!
    $type: Int!
    $password: String!
  ) {
    signup(
      input: {
        email: $email
        firstName: $firstName
        lastName: $lastName
        type: $type
        password: $password
      }
    ) {
      firstName
    }
  }
`;

class Signup extends Component {
  state = {
    ui: PossibleStates('idle', 'success', 'error<reason>'),
  };

  static propTypes = {
    signup: PropTypes.func.isRequired,
  };

  onSignup = values => {
    this.props
      .signup({ variables: { ...values, type: USER_TYPE } })
      .then(() => this.setState(({ ui }) => ({ ui: ui.toSuccess() })))
      .catch(err => this.setState(({ ui }) => ({ ui: ui.toError(err) })));
  };

  render() {
    const { ui } = this.state;
    if (ui.current() === 'success') {
      return <Success />;
    }
    return (
      <Layout>
        <Frame>
          <Heading level="title">Healfit</Heading>
          {ui.whenError(({ reason }) => (
            <StyledAlert tpe="error">{reason}</StyledAlert>
          ))}
          <Form onSubmit={this.onSignup} />
        </Frame>
      </Layout>
    );
  }
}

export default graphql(SignupMutation, { name: 'signup' })(Signup);
