import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { compose, graphql } from 'react-apollo';
import withApolloClient from 'hoc/withApolloClient';
import withAuth from 'helpers/withAuth';
import CookiePopup from 'uikit/organisms/CookiePopup';

const FetchCurrentAccountQuery = gql`
  fragment AccountInfo on Account {
    firstName
    lastName
    roles
  }

  query FetchCurrentAccountInfo {
    currentAccountInfo {
      ...AccountInfo
    }
  }
`;

class Wrapper extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    client: PropTypes.shape({
      query: PropTypes.func.isRequired,
    }).isRequired,
    setCurrentAccount: PropTypes.func.isRequired,
  };

  state = {
    isMounted: false,
  };

  async componentDidMount() {
    try {
      const result = await this.props.client.query({
        query: FetchCurrentAccountQuery,
      });
      console.log(result.data.currentAccountInfo);

      const { currentAccountInfo: account } = result.data;
      if (account) {
        console.log('SI SI SI ');
        await this.props.setCurrentAccount({ variables: { account } });
      }

      return this.setState({ isMounted: true });
    } catch (error) {
      return this.setState({ isMounted: true });
    }
  }

  setAuthAccount = account =>
    this.props.setCurrentAccount({ variables: { account } });

  logout = () => console.log('logout');

  setMounted = () => this.setState({ isMounted: true });

  render() {
    return (
      this.state.isMounted && (
        <Fragment>
          {this.props.children}
          <CookiePopup />
        </Fragment>
      )
    );
  }
}

const SET_CURRENT_USER = gql`
  mutation setCurrentAccount($account: Object) {
    setCurrentAccount(account: $account) @client
  }
`;

export default compose(
  graphql(SET_CURRENT_USER, { name: 'setCurrentAccount' }),
  withAuth,
  withApolloClient
)(Wrapper);
