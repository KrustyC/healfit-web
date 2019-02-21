import React from 'react';
import PropTypes from 'prop-types';
import Form from 'uikit/blocks/Form';
import { Field } from 'formik';

import Wizard from 'components/Wizard';
import Heading from 'uikit/elements/Heading';

const Step1 = ({
  values,
  setFieldTouched,
  setFieldValue,
  recipeCategories,
  recipeLevels,
}) => (
  console.log(values),
  (
    <Wizard.Page>
      <Heading level="h1">Generic Info</Heading>
      <Form.FormGroup>
        <Form.Label>
          Title
          <Form.Input
            as={Field}
            name="title"
            type="text"
            placeholder="Insert recipe title"
          />
        </Form.Label>
        <Form.Feedback name="title" />
      </Form.FormGroup>
      <Form.FormGroup>
        <Form.Label>
          Servings
          <Form.Input
            as={Field}
            name="servings"
            type="number"
            min="1"
            max="10"
            placeholder="Insert number of servings"
          />
        </Form.Label>
        <Form.Feedback name="servings" />
      </Form.FormGroup>
      <Form.FormGroup>
        <Form.Label>
          Total Time (minutes)
          <Form.Input
            as={Field}
            name="totalTime"
            type="number"
            min="0"
            max="500"
            placeholder="Insert time in minutes"
          />
        </Form.Label>
        <Form.Feedback name="totalTime" />
      </Form.FormGroup>
      <Form.FormGroup>
        <Form.Label>
          Category
          <Form.Select
            placeholder="Select a category"
            value={values.category || {}}
            onBlur={() => setFieldTouched('category', true)}
            onChange={category => setFieldValue('category', category)}
          >
            {recipeCategories.map(({ id, name }) => (
              <Form.Select.Option key={id} label={name} value={id} />
            ))}
          </Form.Select>
        </Form.Label>
        <Form.Feedback name="category" />
      </Form.FormGroup>
      <Form.FormGroup>
        <Form.Label>Level</Form.Label>
        <Form.Multichoice>
          {recipeLevels.map(({ id, name }) => (
            <Form.Multichoice.Choice
              key={id}
              id={id}
              name="level"
              label={name}
              value={id}
            />
          ))}
        </Form.Multichoice>
      </Form.FormGroup>
    </Wizard.Page>
  )
);

Step1.propTypes = {
  values: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  recipeLevels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  recipeCategories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Step1;
