import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PossibleStates from 'possible-states';
import styled, { css } from 'styled-components';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Heading from 'uikit/elements/Heading';

import Completed from './Completed';
import Form from './Form';
import Error from './Error';

const ResetPasswordMutation = gql`
  mutation resetPassword($password: String!, $token: String!) {
    resetPassword(input: { password: $password, token: $token })
  }
`;

const Layout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 30% 70%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    min-width: 100%;
    width: ${theme.dimensions.containerWidth.small};
  `}
`;

const Main = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    width: ${theme.dimensions.containerWidth.small};
  `}
`;

class ResetPassword extends Component {
  static propTypes = {
    resetPassword: PropTypes.func.isRequired,
  };

  state = {
    ui: PossibleStates('idle', 'completed', 'error<reason>'),
  };

  onSubmit = async values => {
    try {
      await this.props.resetPassword({ variables: values });
      this.setState(({ ui }) => ({ ui: ui.toComplted() }));
    } catch (error) {
      console.log(error);
      this.setState(({ ui }) => ({ ui: ui.toError(error) }));
    }
  };

  render() {
    const { ui } = this.state;
    return (
      <Layout size="large">
        <Header>
          <Heading level="title" align="center">
            Healfit
          </Heading>
          <Heading level="h3" align="center">
            Reset Your Password
          </Heading>
        </Header>
        <Main>
          {ui.caseOf({
            idle: () => <Form onSubmit={this.onSubmit} />,
            completed: () => <Completed />,
            error: ({ reason }) => <Error reason={reason} />,
          })}
        </Main>
      </Layout>
    );
  }
}

export default graphql(ResetPasswordMutation, { name: 'resetPassword' })(
  ResetPassword
);
