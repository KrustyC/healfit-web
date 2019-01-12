import React, { Component } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import PossibleStates from 'possible-states';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';
import Alert from 'uikit/blocks/Alert';
import Heading from 'uikit/elements/Heading';
import Form from './Form';
import Success from './Success';
import {
  Container,
  Bottom,
  Header,
  FormContainer,
  ImgSide,
  FormSide,
} from '../components';

const StyledAlert = styled(Alert)`
  margin-top: 20px;
  margin-bottom: -20px;
  width: 70%;
`;

const StyledPoseGroup = styled(PoseGroup)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const USER_TYPE = 1;

const Modal = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: 'spring', stiffness: 300, damping: 500 },
      default: { duration: 300 },
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 },
  },
});

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
    // this.props
    //   .signup({ variables: { ...values, type: USER_TYPE } })
    //   .then(() => this.setState(({ ui }) => ({ ui: ui.toSuccess() })))
    //   .catch(err => this.setState(({ ui }) => ({ ui: ui.toError(err) })));
    this.setState(({ ui }) => ({
      ui: ui.toError('Big issue happened'),
    })); // /
  };

  render() {
    const { ui } = this.state;
    const hideForm = ui.current() === 'success';

    return (
      <Container>
        <FormSide>
          <Header>
            <Heading level="title">Healfit</Heading>
            <button onClick={this.onSignup}>Visible</button>
          </Header>
          <div style={{ display: 'flex'; flexDirection: 'column';}}>
            {ui.whenError(({ reason }) => (
              <StyledAlert type="error">{reason}</StyledAlert>
            ))}
            <StyledPoseGroup>
              {hideForm && [
                <Modal key="modal">
                  <Success />
                </Modal>,
              ]}
            </StyledPoseGroup>
            <FormContainer key="form" show={!hideForm}>
              <Form onSubmit={this.onSignup} />
            </FormContainer>
          </div>
          {/* {ui.caseOf({
              success: () => <Success />,
              _: () => <FormContainer><Form onSubmit={this.onSignup} /><FormContainer/>,
            })} */}
          <Bottom />
        </FormSide>
        {/* eslint-disable-next-line global-require */}
        <ImgSide url={require('assets/images/signup.jpg')} />
      </Container>
    );
  }
}

export default graphql(SignupMutation, { name: 'signup' })(Signup);
