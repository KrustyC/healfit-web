import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import gql from 'graphql-tag';
import { Formik } from 'formik';
import 'react-times/css/classic/default.css';

import withApolloClient from 'hoc/withApolloClient';

import Modal from 'uikit/blocks/Modal';
import Form from './Form';

// @TODO Add a "Can't find the recipe you are looking for? Add it to the system!"

const SEARCH_RECIPES = gql`
  query recipes($title: String) {
    recipesByTitle(title: $title) {
      id
      title
      slug
      picture
      calories
    }
  }
`;

const validationSchema = Yup.object().shape({
  type: Yup.string().required('Please select a type'),
  start: Yup.string().required('Please add a start time'),
  end: Yup.string().required('Please add a end time'), // @TODO Validate end time is after start time
  mealType: Yup.string().when('type', {
    is: 'meal',
    then: Yup.string().min(1, 'Please select a meal category'),
    otherwise: Yup.string().min(0),
  }),
  recipes: Yup.array().when('type', {
    is: 'meal',
    then: Yup.array().min(1, 'Please add at least one recipe'),
    otherwise: Yup.array().min(0),
  }),
});

const AddMealOrTrainingModal = ({
  client,
  startTime,
  show,
  onConfirm,
  onClose,
}) => {
  const [lookupRecipes, setLookupRecipes] = useState([]);
  const onSelectRecipe = (values, setFieldValue) => recipe => {
    setFieldValue('recipes', [...values.recipes, recipe]);
  };

  const onSearchRecipe = async value => {
    if (value.length === 0) {
      return setLookupRecipes([]);
    }

    try {
      const { data } = await client.query({
        query: SEARCH_RECIPES,
        variables: { title: value },
      });

      return setLookupRecipes(data.recipesByTitle);
    } catch (error) {
      return error;
    }
  };

  return (
    <Modal large show={show} onCancel={onClose}>
      <Formik
        initialValues={{
          day: startTime,
          type: '',
          start: startTime ? startTime.format('HH:mm') : '',
          end: startTime
            ? startTime
                .clone()
                .add(60, 'm')
                .format('HH:mm')
            : '',
          mealType: '',
          recipes: [],
        }}
        onSubmit={onConfirm}
        validationSchema={validationSchema}
      >
        {({ values, isValid, handleSubmit, setFieldValue }) => (
          <>
            <Modal.Header>Add Meal or Training </Modal.Header>
            <Modal.Body>
              <Form
                values={values}
                lookupRecipes={lookupRecipes}
                setFieldValue={setFieldValue}
                onSelectRecipe={onSelectRecipe}
                onSearchRecipe={onSearchRecipe}
              />
            </Modal.Body>
            <Modal.Footer>
              <Modal.Cancel />
              <Modal.Confirm disabled={!isValid} onClick={handleSubmit}>
                Create
              </Modal.Confirm>
            </Modal.Footer>
          </>
        )}
      </Formik>
    </Modal>
  );
};

AddMealOrTrainingModal.propTypes = {
  show: PropTypes.bool.isRequired,
  startTime: PropTypes.object,
  onConfirm: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  client: PropTypes.shape({
    query: PropTypes.func.isRequired,
  }).isRequired,
};

AddMealOrTrainingModal.defaultProps = {
  startTime: null,
};

export default withApolloClient(AddMealOrTrainingModal);
