import { Component } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { compose, graphql } from 'react-apollo';
import { withAuth } from 'app/apollo/auth';

const FetchCurrentUserMutation = gql`
  mutation fetchCurrentUserInfo() {
    fetchCurrentUserInfo() {
      user {
        firstName
        lastName
      }
    }
  }
`;

class Wrapper extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    setCurrentUser: PropTypes.func.isRequired,
    fetchCurrentUserInfo: PropTypes.func.isRequired,
  };

  state = {
    isMounted: false,
  };

  componentDidMount() {
    this.props
      .fetchCurrentUserInfo()
      .then(this.setAuthUser)
      .catch(this.logout)
      .finally(this.setMounted);
  }

  setAuthUser = user => this.props.setCurrentUser({ variables: { user } });

  logout = () => console.log('logout');

  setMounted = () => this.setState({ isMounted: true });

  render() {
    return this.state.isMounted && this.props.children;
  }
}

export default compose(
  graphql(FetchCurrentUserMutation, { name: 'fetchCurrentUserInfo' }),
  withAuth
)(Wrapper);
