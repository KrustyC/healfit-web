import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Recipe from './Recipe';

const GET_RECIPE = gql`
  query GetRecipe($slug: String!) {
    recipe(slug: $slug) {
      slug
      title
      servings
      totalTime
      category {
        id
        name
      }
      level {
        id
        name
      }
      ingredients {
        id
        name
        measurement {
          name
          id
        }
        quantity
      }
      method
      picture
      calories
      carbohydrates
      protein
      fat
    }
  }
`;

const ViewRecipe = ({
  match: {
    params: { slug },
  },
}) => (
  <Query query={GET_RECIPE} variables={{ slug }}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      return <Recipe recipe={data.recipe} />;
    }}
  </Query>
);

ViewRecipe.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ViewRecipe;
