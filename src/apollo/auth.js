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
      user
    }
    authStatus {
      isAuthenticated
    }
  }
`;

const setUserQuery = gql`
  mutation setUser($user: Object) {
    setUser(user: $user) @client
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
    clearUser,
  },
};

// const currentUserQueryHandler = {
//   props: ({ ownProps, data: { currentUser, isAuthenticated } }) => ({
//     ...ownProps,
//     currentUser,
//     isAuthenticated,
//   }),
// };

const currentUserQueryHandler = {
  props: ({ data: { currentUser, authStatus } }) => ({
    user: currentUser.user,
    isAuthenticated: authStatus.isAuthenticated,
  }),
};

const withAuth = compose(
  graphql(currentUserQuery, currentUserQueryHandler),
  graphql(setUserQuery, { name: 'setCurrentUser' }),
  graphql(clearUserQuery, { name: 'clearUser' })
);

export { defaults, resolvers, withAuth };
