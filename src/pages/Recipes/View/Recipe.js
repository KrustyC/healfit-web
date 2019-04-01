import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { withToastManager } from 'uikit/blocks/Toast';
import Modal from 'uikit/blocks/Modal';
import StarRating from 'uikit/blocks/StarRating';

import Header from './Header';
import Nutrients from './Nutrients';
import Info from './Info';
import Ingredients from './Ingredients';
import Method from './Method';
import Bottom from './Bottom';

const Layout = styled.div`
  ${({ theme }) => css`
    min-height: calc(100vh - ${theme.dimensions.navbarHeight});
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${theme.dimensions.containerWidth.large};
    margin: 0 auto;

    @media (max-width: ${theme.sizes.md}) {
      width: ${theme.dimensions.containerWidth.fullscreen};
    }
  `}
`;

const RatContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.margin.xs};
  `}
`;

const Recipe = ({ recipe, rateRecipe, toastManager }) => {
  const [wantToRate, setWantToRate] = useState(false);
  const [rating, setRating] = useState(recipe.rating);

  const onShowModal = () => setWantToRate(true);
  const onCloseModal = () => setWantToRate(false);

  const onSelectRate = rate => setRating(rate);

  const onRate = async () => {
    try {
      await rateRecipe({ variables: { slug: recipe.slug, rate: rating } });
      onCloseModal();
      toastManager.add('Your review has succesfully been submitted!', {
        appearance: 'success',
      });
    } catch (error) {
      toastManager.add(
        'Unfortunately your review could not be submitted, please try again later!',
        {
          appearance: 'error',
        }
      );
    }
  };

  return (
    <>
      <Layout>
        <Header recipe={recipe} />
        <Nutrients recipe={recipe} />
        <Info recipe={recipe} />
        <Ingredients ingredients={recipe.ingredients} />
        <Method method={recipe.method} />
        <Bottom onRateRecipe={onShowModal} />
      </Layout>
      <Modal show={wantToRate} onCancel={onCloseModal}>
        <Modal.Header>Rate this recipe</Modal.Header>
        <Modal.Body>
          How much did you like this recipe on a scale from 1 to 5?
          <RatContainer>
            <StarRating onRate={onSelectRate} />
          </RatContainer>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Cancel />
          <Modal.Confirm onClick={onRate}>Add Review</Modal.Confirm>
        </Modal.Footer>
      </Modal>
    </>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  rateRecipe: PropTypes.func.isRequired,
};

const RATE = gql`
  mutation rateRecipe($slug: String!, $rate: Int!) {
    rateRecipe(input: { slug: $slug, rate: $rate }) {
      recipeId
    }
  }
`;

export default compose(
  graphql(RATE, { name: 'rateRecipe' }),
  withToastManager
)(Recipe);
