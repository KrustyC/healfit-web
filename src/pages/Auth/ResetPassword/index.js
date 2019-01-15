import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PossibleStates from 'possible-states';
import styled, { css } from 'styled-components';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { locationToString } from 'helpers/queryString';
import Heading from 'uikit/elements/Heading';
import P from 'uikit/elements/P';

import Completed from './Completed';
import Form from './Form';
import Error from './Error';

const ResetPasswordMutation = gql`
  mutation resetPassword($password: String!, $token: String!) {
    resetPassword(input: { password: $password, token: $token })
  }
`;

const Layout = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: ${theme.dimensions.containerWidth.small};

    margin: 0 auto;
    @media (max-width: ${theme.sizes.md}) {
      width: ${theme.dimensions.containerWidth.fullscreen};
    }
  `}
`;

const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 2;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: ${theme.sizes.md}) {
      flex: 3;
    }
  `}
`;

const Main = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 5;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    form {
      width: ${theme.dimensions.containerWidth.xsmall};
    }

    @media (max-width: ${theme.sizes.md}) {
      form {
        width: ${theme.dimensions.containerWidth.large};
        padding: 0 ${theme.padding.md};
      }
    }

    @media (max-width: ${theme.sizes.sm}) {
      form {
        width: ${theme.dimensions.containerWidth.fullscreen};
        padding: 0 ${theme.padding.md};
      }
    }
  `}
`;

class ResetPassword extends Component {
  static propTypes = {
    location: PropTypes.shape({
      search: PropTypes.string.isRequired,
    }).isRequired,
    resetPassword: PropTypes.func.isRequired,
  };

  state = {
    ui: PossibleStates('idle', 'completed', 'error<reason>'),
  };

  componentDidMount() {
    const { token } = locationToString(this.props.location);
    if (!token) {
      this.setState(({ ui }) => ({
        ui: ui.toError('The URL provided is invalid! Please try another URL!'),
      }));
    }
  }

  onSubmit = async (values, { resetForm }) => {
    const { password } = values;
    const { token } = locationToString(this.props.location);
    try {
      await this.props.resetPassword({ variables: { token, password } });
      this.setState(({ ui }) => ({ ui: ui.toCompleted() }));
    } catch (error) {
      const errors = error.graphQLErrors.map(x => x.message);
      this.setState(({ ui }) => ({ ui: ui.toError(errors[0]) }));
      resetForm();
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
          <P align="center">
            Remember to choose a strong and memorable password!{' '}
          </P>
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
