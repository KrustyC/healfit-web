import React, { Component } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import PossibleStates from 'possible-states';
import styled, { css } from 'styled-components';
import Alert from 'uikit/blocks/Alert';
import Heading from 'uikit/elements/Heading';
import { Loader } from 'uikit/elements/Loaders';
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

const StyledAlert = styled(Alert)`
  ${({ theme }) => css`
    margin: 0 20px;
    width: 70%;

    @media (max-width: ${theme.sizes.md}) {
      width: 90%;
    }
  `}
`;

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
    ui: PossibleStates('idle', 'success', 'loading', 'error<reason>'),
  };

  static propTypes = {
    signup: PropTypes.func.isRequired,
  };

  onSignup = values => {
    this.setState(({ ui }) => ({ ui: ui.toLoading() }));
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
              <StyledAlert type="error">{reason}</StyledAlert>
            ))}

            {ui.caseOf({
              success: () => <Success />,
              loading: () => <Loader />,
              _: () => (
                <FormContainer>
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
