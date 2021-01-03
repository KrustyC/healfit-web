import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const GET_GLOBAL_DATA = gql`
  {
    globalData @client {
      ingredientsCategories {
        id
        name
      }
      mealTypes {
        id
        name
      }
      measurements {
        id
        name
      }
      recipeCategories {
        id
        name
      }
      recipeLevels {
        id
        name
      }
    }
  }
`;

const globalDataQueryHandler = {
  props: ({ data: { globalData } }) => ({
    globalData,
  }),
};

export default Component =>
  graphql(GET_GLOBAL_DATA, globalDataQueryHandler)(Component);
