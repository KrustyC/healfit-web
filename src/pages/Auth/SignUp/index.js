import React, { Component } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import PossibleStates from 'possible-states';
import Alert from 'uikit/blocks/Alert';
import Heading from 'uikit/elements/Heading';
import Link from 'uikit/elements/Link';
import P from 'uikit/elements/P';
import Form from './Form';
import Success from './Success';
import {
  Container,
  Bottom,
  Header,
  FormContainer,
  ImgSide,
  FormSide,
  Frame,
} from '../components';

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
      .catch(err => {
        this.setState(({ ui }) => ({ ui: ui.toError(err) }));
        setTimeout(() => {
          this.setState(({ ui }) => ({
            ui: ui.toIdle(),
          }));
        });
      });
  };

  render() {
    const { ui } = this.state;

    return (
      <Container>
        <FormSide>
          <Header>
            <Heading level="title">Healfit</Heading>
          </Header>
          <Frame>
            {ui.whenError(({ reason }) => (
              <Alert style={{ margin: '0 20px', width: '70%' }} type="error">
                {reason}
              </Alert>
            ))}

            {ui.caseOf({
              success: () => <Success />,
              _: () => (
                <FormContainer key="form">
                  <Form onSubmit={this.onSignup} />
                  <br />
                  <P size="small" style={{ display: 'flex' }}>
                    Already have an account?&nbsp;
                    <Link to="/auth/signin">Sign In</Link>
                  </P>
                </FormContainer>
              ),
            })}
          </Frame>
          <Bottom />
        </FormSide>
        {/* eslint-disable-next-line global-require */}
        <ImgSide url={require('assets/images/signup.jpg')} />
      </Container>
    );
  }
}

export default graphql(SignupMutation, { name: 'signup' })(Signup);
