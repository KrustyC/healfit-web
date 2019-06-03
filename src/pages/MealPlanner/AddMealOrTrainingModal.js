import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import gql from 'graphql-tag';
import { Formik } from 'formik';
import withApolloClient from 'hoc/withApolloClient';

import Modal from 'uikit/blocks/Modal';
import Form from 'uikit/blocks/Form';

// @TODO Add a "Can't find the recipe you are looking for? Add it to the system!"

const SEARCH_RECIPES = gql`
  query recipes($name: String) {
    recipesByName(name: $name) {
      id
      name
    }
  }
`;

const types = [
  {
    id: 'mt-1',
    name: 'Meal',
  },
  {
    id: 'mt-2',
    name: 'Workout',
  },
];

const validationSchema = Yup.object().shape({
  type: Yup.string()
    .min(2, 'Add at least two letters')
    .required('Please add a name'),
  start: Yup.string().required('Please add a start time'),
  end: Yup.string().required('Please add a end time'),
  recipes: Yup.string().required('Please add at least one recipe'),
});

const AddMealOrTrainingModal = ({ client, show, onConfirm, onClose }) => {
  const [lookupRecipes, setLookupRecipes] = useState([]);

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
        variables: { name: value },
      });

      return setLookupRecipes(result.data.recipesByName);
    } catch (error) {
      return error;
    }
  };

  return (
    <Modal large show={show} onCancel={onClose}>
      <Formik
        initialValues={{
          type: '',
          start: '',
          end: '',
          recipes: [],
        }}
        onSubmit={onConfirm}
        validationSchema={validationSchema}
      >
        {({ values, isValid, handleSubmit, setFieldValue }) => (
          <>
            <Modal.Header>Add Meal or Training </Modal.Header>
            <Modal.Body>
              <Form.FormGroup>
                <Form.Label>Please select a type</Form.Label>
                <Form.Multichoice>
                  {types.map(({ id, name }) => (
                    <Form.Multichoice.Choice
                      key={id}
                      id={id}
                      name="level"
                      checked={values.level === id}
                      onChange={e => setFieldValue('level', e.target.value)}
                      label={name}
                      value={id}
                    />
                  ))}
                </Form.Multichoice>
              </Form.FormGroup>
              <Form.FormGroup>
                <Form.Label>Add one or more recipes to your meal</Form.Label>
                <Form.RemoteFilter
                  placeholder="Search for recipes..."
                  list={lookupRecipes}
                  labelField="name"
                  emptyMessage="No Recipes Avaialable"
                  query={onSearchRecipe}
                  onSelect={onSelectRecipe(values, setFieldValue)}
                />
                <Form.Feedback name="ingredients" />
              </Form.FormGroup>
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
  onConfirm: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  client: PropTypes.shape({
    query: PropTypes.func.isRequired,
  }).isRequired,
};

export default withApolloClient(AddMealOrTrainingModal);
