import { Component } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { compose } from 'react-apollo';
import withApolloClient from 'hoc/withApolloClient';
import { withAuth } from 'app/apollo/auth';

const FetchCurrentUserQuery = gql`
  fragment UserInfo on User {
    firstName
    lastName
  }

  query FetchCurrentUserInfo {
    currentUserInfo {
      user {
        ...UserInfo
      }
    }
  }
`;

class Wrapper extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    client: PropTypes.shape({
      query: PropTypes.func.isRequired,
    }).isRequired,
    setCurrentUser: PropTypes.func.isRequired,
  };

  state = {
    isMounted: false,
  };

  async componentDidMount() {
    try {
      const result = await this.props.client.query({
        query: FetchCurrentUserQuery,
      });

      const { user } = result.data.currentUserInfo;
      if (user) {
        await this.props.setCurrentUser({ variables: { user } });
      }

      return this.setState({ isMounted: true });
    } catch (error) {
      return this.setState({ isMounted: true });
    }
  }

  setAuthUser = user => this.props.setCurrentUser({ variables: { user } });

  logout = () => console.log('logout');

  setMounted = () => this.setState({ isMounted: true });

  render() {
    return this.state.isMounted && this.props.children;
  }
}

export default compose(
  withAuth,
  withApolloClient
)(Wrapper);
