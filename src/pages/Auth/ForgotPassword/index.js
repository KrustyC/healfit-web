import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Heading from 'uikit/elements/Heading';
import P from 'uikit/elements/P';
import Container from 'uikit/blocks/Container';
import Completed from './Completed';

import Form from './Form';

const ForgotPasswordMutation = gql`
  mutation forgottenPassword($email: String!) {
    forgottenPassword(input: { email: $email })
  }
`;

const Layout = styled(Container)`
  height: 100vh;
  display: grid;
  grid-template-rows: 30% 70%;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
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
      <Layout>
        <Header>
          <Heading level="title" align="center">
            Healfit
          </Heading>
          <Heading level="h3" align="center">
            Reset Your Password
          </Heading>
          <P align="center">
            Did you forget your password? No worries, you can change it in less
            than a minute!
          </P>
        </Header>
        <Main>
          {!completed ? <Form onSubmit={this.onSubmit} /> : <Completed />}
        </Main>
      </Layout>
    );
  }
}

export default graphql(ForgotPasswordMutation, { name: 'forgottenPassword' })(
  ForgotPassword
);
