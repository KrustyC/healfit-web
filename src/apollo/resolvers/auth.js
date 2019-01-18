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

const resolvers = {
  Mutation: {
    setCurrentUser: (_, { user }, { cache }) => {
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
    },
    clearUser: (_, _args, { cache }) => {
      const data = {
        currentUser: {
          user: null,
          __typename: 'CurrentUser',
        },
      };
      localStorage.removeItem('healfit:token');
      cache.writeData({ data });
      return null;
    },
  },
};

export default { defaults, resolvers };
