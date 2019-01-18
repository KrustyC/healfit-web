import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const GET_CURRENT_USER = gql`
  {
    currentUser @client {
      user {
        firstName
        lastName
      }
    }
    authStatus @client {
      isAuthenticated
    }
  }
`;

const currentUserQueryHandler = {
  props: ({ data: { currentUser, authStatus } }) => ({
    authUser: currentUser.user,
    isAuthenticated: authStatus.isAuthenticated,
  }),
};

export default Component =>
  graphql(GET_CURRENT_USER, currentUserQueryHandler)(Component);
