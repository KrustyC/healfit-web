import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { compose } from 'react-apollo';
import * as Yup from 'yup';
import gql from 'graphql-tag';
import { Formik } from 'formik';
import TimePicker from 'react-times';
import 'react-times/css/classic/default.css';

import withGlobalData from 'hoc/withGlobalData';
import withApolloClient from 'hoc/withApolloClient';

import Heading from 'uikit/elements/Heading';
import Modal from 'uikit/blocks/Modal';
import Form from 'uikit/blocks/Form';

// @TODO Visualise the correct date but let the user change the time
// @TODO Add a "Can't find the recipe you are looking for? Add it to the system!"

const SEARCH_RECIPES = gql`
  query recipes($title: String) {
    recipesByTitle(title: $title) {
      id
      title
      slug
      picture
    }
  }
`;

const validationSchema = Yup.object().shape({
  type: Yup.string()
    .min(2, 'Add at least two letters')
    .required('Please add a name'),
  start: Yup.object().required('Please add a start time'),
  end: Yup.object().required('Please add a end time'),
  recipes: Yup.string().required('Please add at least one recipe'),
});

const AddMealOrTrainingModal = ({
  client,
  startEnd,
  show,
  onConfirm,
  onClose,
  globalData: { mealTypes },
}) => {
  const [lookupRecipes, setLookupRecipes] = useState([]);
  const day =
    startEnd.start !== null
      ? moment(startEnd.start).format('Do [of] MMMM')
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
          start: '', // @TODO Get the time from the user selection
          end: '', // @TODO Get the time from the user selection
          recipes: [],
        }}
        onSubmit={onConfirm}
        validationSchema={validationSchema}
      >
        {({ values, isValid, handleSubmit, setFieldValue }) => (
          console.log(values),
          (
            <>
              <Modal.Header>Add Meal or Training </Modal.Header>
              <Modal.Body>
                {day}
                <Form.FormGroup>
                  <Form.Label>Please select a type</Form.Label>
                  <Form.Multichoice>
                    {mealTypes.map(({ id, name }) => (
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
                <div style={{ display: 'flex' }}>
                  <div style={{ flex: 1 }}>
                    Start
                    <br />
                    <TimePicker
                      onTimeChange={({ hour, minute }) =>
                        setFieldValue('start', `${hour}:${minute}`)
                      }
                      time={values.start}
                      theme="classic"
                      timeConfig={{
                        step: 15,
                        unit: 'minute',
                      }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    End
                    <br />
                    <TimePicker
                      onTimeChange={({ hour, minute }) =>
                        setFieldValue('end', `${hour}:${minute}`)
                      }
                      time={values.end}
                      timeConfig={{
                        step: 15,
                        unit: 'minute',
                      }}
                    />
                  </div>
                </div>
                <Form.FormGroup>
                  <Form.Label>Add one or more recipes to your meal</Form.Label>
                  <Form.RemoteFilter
                    placeholder="Search for recipes..."
                    list={lookupRecipes}
                    labelField="title"
                    emptyMessage="No Recipes Avaialable"
                    query={onSearchRecipe}
                    onSelect={onSelectRecipe(values, setFieldValue)}
                  />
                  <Form.Feedback name="ingredients" />
                </Form.FormGroup>
                <Heading level="h4">Selected Recipes</Heading>
                <ul>
                  {values.recipes.map(({ id, slug, picture, title }) => (
                    <li key={id}>{title}</li>
                  ))}
                </ul>
              </Modal.Body>
              <Modal.Footer>
                <Modal.Cancel />
                <Modal.Confirm disabled={!isValid} onClick={handleSubmit}>
                  Create
                </Modal.Confirm>
              </Modal.Footer>
            </>
          )
        )}
      </Formik>
    </Modal>
  );
};

AddMealOrTrainingModal.propTypes = {
  globalData: PropTypes.shape({
    mealTypes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
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

export default compose(
  withGlobalData,
  withApolloClient
)(AddMealOrTrainingModal);
