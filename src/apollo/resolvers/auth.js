const defaults = {
  currentAccount: {
    account: null,
    __typename: 'CurrentAccount',
  },
  authStatus: {
    isAuthenticated: false,
    __typename: 'AuthStatus',
  },
};

const resolvers = {
  Mutation: {
    setCurrentAccount: (_, { account }, { cache }) => {
      const data = {
        currentAccount: {
          account,
          __typename: 'CurrentAccount',
        },
        authStatus: {
          isAuthenticated: true,
          __typename: 'AuthStatus',
        },
      };
      cache.writeData({ data });
      return null;
    },
    clearAccount: (_, _args, { cache }) => {
      const data = {
        currentAccount: {
          account: null,
          __typename: 'CurrentAccount',
        },
      };
      localStorage.removeItem('healfit:token');
      cache.writeData({ data });
      return null;
    },
  },
};

export default { defaults, resolvers };
