import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';

const defaults = {
  token: null,
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
      user
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

const setAuthTokenQuery = gql`
  mutation setAuthToken($token: String) {
    setAuthToken(token: $token) @client
  }
`;

const clearUserQuery = gql`
  mutation clearUser {
    clearUser @client
  }
`;

const clearAuthTokenQuery = gql`
  mutation clearToken {
    clearToken @client
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

const setAuthToken = (_, { token }, { cache }) => {
  const data = {
    token,
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
  cache.writeData({ data });
  return null;
};

const clearAuthToken = (_, _args, { cache }) => {
  const data = {
    token: null,
    authStatus: {
      isAuthenticated: true,
      __typename: 'AuthStatus',
    },
  };
  cache.writeData({ data });
  return null;
};

const resolvers = {
  Mutation: {
    setCurrentUser,
    setAuthToken,
    clearUser,
    clearAuthToken,
  },
};

const currentUserQueryHandler = {
  props: ({ data: { token, currentUser, authStatus } }) => ({
    token,
    user: currentUser.user,
    isAuthenticated: authStatus.isAuthenticated,
  }),
};

const withAuth = compose(
  graphql(currentUserQuery, currentUserQueryHandler),
  graphql(setCurrentUserQuery, { name: 'setCurrentUser' }),
  graphql(setAuthTokenQuery, { name: 'setAuthToken' }),
  graphql(clearUserQuery, { name: 'clearUser' }),
  graphql(clearAuthTokenQuery, { name: 'clearAuthToken' })
);

export { defaults, resolvers, withAuth };
