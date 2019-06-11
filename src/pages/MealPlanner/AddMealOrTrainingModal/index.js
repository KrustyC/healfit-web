import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import * as Yup from 'yup';
import gql from 'graphql-tag';
import { Formik } from 'formik';
import 'react-times/css/classic/default.css';

import withApolloClient from 'hoc/withApolloClient';

import Modal from 'uikit/blocks/Modal';
import Form from './Form';

// @TODO Visualise the correct date but let the user change the time
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
  recipes: Yup.array().when('type', {
    is: 'mt-1',
    then: Yup.array().min(1, 'Please add at least one recipe'),
    otherwise: Yup.array().min(0),
  }),
});

const AddMealOrTrainingModal = ({
  client,
  startEnd,
  show,
  onConfirm,
  onClose,
}) => {
  const [lookupRecipes, setLookupRecipes] = useState([]);
  const day =
    startEnd.start !== null
      ? moment(startEnd.start).format('dddd[,] Do MMMM YYYY')
      : null;

  const onSelectRecipe = (values, setFieldValue) => recipe => {
    setFieldValue('recipes', [...values.recipes, recipe]);
  };

  const onSearchRecipe = async value => {
    if (value.length === 0) {
      return setLookupRecipes([]);
    }

    try {
      const result = await client.query({
        query: SEARCH_RECIPES,
        variables: { title: value },
      });

      return setLookupRecipes(result.data.recipesByTitle);
    } catch (error) {
      return error;
    }
  };

  return (
    <Modal large show={show} onCancel={onClose}>
      <Formik
        initialValues={{
          type: '',
          start: startEnd.start ? startEnd.start.format('HH:mm') : '',
          end: startEnd.end ? startEnd.end.format('HH:mm') : '',
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
                day={day}
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
  startEnd: PropTypes.shape({
    start: PropTypes.object,
    end: PropTypes.object,
  }).isRequired,
  onConfirm: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  client: PropTypes.shape({
    query: PropTypes.func.isRequired,
  }).isRequired,
};

export default withApolloClient(AddMealOrTrainingModal);
