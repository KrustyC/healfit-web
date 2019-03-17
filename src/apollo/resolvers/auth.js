const defaults = {
  account: null,
  isAuthenticated: false,
};

const resolvers = {
  Mutation: {
    setCurrentAccount: (_, { account }, { cache }) => {
      const data = {
        account,
        isAuthenticated: true,
      };
      cache.writeData({ data });
      console.log('written', data);
      return null;
    },
    clearAccount: (_, _args, { cache }) => {
      const data = {
        account: null,
      };
      localStorage.removeItem('healfit:token');
      cache.writeData({ data });
      return null;
    },
  },
};

export default { defaults, resolvers };
