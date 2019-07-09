import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const SEARCH_RECIPES = gql`
  query recipes($title: String) {
    recipesByTitle(title: $title) {
      _id
      title
      slug
      picture
      calories
    }
  }
`;
