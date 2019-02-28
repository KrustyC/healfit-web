import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import EditForm from './EditForm';

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
      description
      calories
      carbohydrates
      protein
      fat
    }
  }
`;

const EditRecipeWrapper = ({
  match: {
    params: { slug },
  },
}) => (
  <Query query={GET_RECIPE} variables={{ slug }}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      return <EditForm recipe={data.recipe} />;
    }}
  </Query>
);

EditRecipeWrapper.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditRecipeWrapper;
