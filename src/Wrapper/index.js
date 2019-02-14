import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo';
import { CloudinaryContext } from 'cloudinary-react';
import withApolloClient from 'hoc/withApolloClient';
import withAuth from 'hoc/withAuth';
import withGlobalData from 'hoc/withGlobalData';
import CookiePopup from 'uikit/organisms/CookiePopup';
import {
  FETCH_INITIAL_DATA,
  FETCH_CURRENT_ACCOUNT_QUERY,
  SET_CURRENT_USER,
  SET_GLOBAL_DATA,
} from './queries';

class Wrapper extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    client: PropTypes.shape({
      query: PropTypes.func.isRequired,
    }).isRequired,
    setGlobalData: PropTypes.func.isRequired,
    setCurrentAccount: PropTypes.func.isRequired,
  };

  state = {
    isMounted: false,
  };

  async componentDidMount() {
    window.cloudinary.setCloudName('healfituk');

    try {
      const {
        data: { globalData },
      } = await this.props.client.query({
        query: FETCH_INITIAL_DATA,
      });

      await this.props.setGlobalData({ variables: { globalData } });

      const currentAccount = await this.props.client.query({
        query: FETCH_CURRENT_ACCOUNT_QUERY,
      });

      const { currentAccountInfo: account } = currentAccount.data;
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
        <CloudinaryContext cloudName="healfituk">
          {this.props.children}
          <CookiePopup />
        </CloudinaryContext>
      )
    );
  }
}

export default compose(
  graphql(SET_CURRENT_USER, { name: 'setCurrentAccount' }),
  graphql(SET_GLOBAL_DATA, { name: 'setGlobalData' }),
  withGlobalData,
  withAuth,
  withApolloClient
)(Wrapper);
