import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';

const defaults = {
  currentUser: {
    user: null,
    __typename: 'CurrentUser',
  },
  authStatus: {
    isAuthenticated: false,
    __typename: 'AuthStatus',
  },
};

const currentUserQuery = gql`
  query GetCurrentUser @client {
    currentUser {
      user {
        firstName
        lastName
      }
    }
    authStatus {
      isAuthenticated
    }
  }
`;

const setCurrentUserQuery = gql`
  mutation setCurrentUser($user: Object) {
    setCurrentUser(user: $user) @client
  }
`;

const clearUserQuery = gql`
  mutation clearUser {
    clearUser @client
  }
`;

const setCurrentUser = (_, { user }, { cache }) => {
  const data = {
    currentUser: {
      user,
      __typename: 'CurrentUser',
    },
    authStatus: {
      isAuthenticated: true,
      __typename: 'AuthStatus',
    },
  };
  cache.writeData({ data });
  return null;
};

const clearUser = (_, _args, { cache }) => {
  const data = {
    currentUser: {
      user: null,
      __typename: 'CurrentUser',
    },
  };
  localStorage.removeItem('healfit:token');
  cache.writeData({ data });
  return null;
};

const resolvers = {
  Mutation: {
    setCurrentUser,
    clearUser,
  },
};

const currentUserQueryHandler = {
  props: ({ data: { currentUser, authStatus } }) => ({
    authUser: currentUser.user,
    isAuthenticated: authStatus.isAuthenticated,
  }),
};

const withAuth = compose(
  graphql(currentUserQuery, currentUserQueryHandler),
  graphql(setCurrentUserQuery, { name: 'setCurrentUser' }),
  graphql(clearUserQuery, { name: 'clearUser' })
);

export { defaults, resolvers, withAuth };
