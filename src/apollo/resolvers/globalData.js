const defaults = {
  globalData: {
    ingridientCategories: [],
    __typename: 'GlobalData',
  },
};

const resolvers = {
  Mutation: {
    setGlobalData: (_, { globalData }, { cache }) => {
      console.log(globalData);
      // const data = { globalData };
      cache.writeData({ data: { globalData } });
      return null;
    },
  },
};

export default { defaults, resolvers };
