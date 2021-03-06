const defaults = {
  globalData: {
    ingredientCategories: [],
    measurements: [],
    recipeCategories: [],
    recipeLevels: [],
    __typename: 'GlobalData',
  },
};

const resolvers = {
  Mutation: {
    setGlobalData: (_, { globalData }, { cache }) => {
      cache.writeData({ data: { globalData } });
      return null;
    },
  },
};

export default { defaults, resolvers };
