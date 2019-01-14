import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PossibleStates from 'possible-states';
import { locationToString } from 'helpers/queryString';
import Container from 'uikit/blocks/Container';

import Success from './Success';
import Error from './Error';
import Idle from './Idle';

const VerifyAccountMutation = gql`
  mutation verifyAccount($email: String!, $token: String!) {
    verifyAccount(input: { email: $email, token: $token })
  }
`;

class VerifyAccount extends Component {
  static propTypes = {
    location: PropTypes.shape({
      search: PropTypes.string.isRequired,
    }).isRequired,
    verifyAccount: PropTypes.func.isRequired,
  };

  state = {
    ui: PossibleStates('idle', 'error<reason>', 'verified'),
  };

  componentDidMount() {
    const { token, email } = locationToString(this.props.location);
    if (!token || !email) {
      return this.setState(({ ui }) => ({
        ui: ui.toError('The URL provided is invalid! Please try another URL!'),
      }));
    }

    return this.props
      .verifyAccount({ variables: { token, email } })
      .then(() => this.setState(({ ui }) => ({ ui: ui.toVerified() })))
      .catch(error => {
        const errors = error.graphQLErrors.map(x => x.message);
        this.setState(({ ui }) => ({ ui: ui.toError(errors[0]) }));
      });
  }

  render() {
    const { ui } = this.state;
    return (
      <Container size="fullscreen">
        {ui.caseOf({
          idle: () => <Idle />,
          error: ({ reason }) => <Error reason={reason} />,
          verified: () => <Success />,
        })}
      </Container>
    );
  }
}

export default graphql(VerifyAccountMutation, { name: 'verifyAccount' })(
  VerifyAccount
);
