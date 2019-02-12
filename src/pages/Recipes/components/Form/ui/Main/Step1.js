import React from 'react';
import PropTypes from 'prop-types';
import Form from 'uikit/blocks/Form';
import { Field } from 'formik';

import Wizard from 'components/Wizard';
import Heading from 'uikit/elements/Heading';

// @TODO take this from global data
const categories = [
  { id: 1, name: 'Breakfast' },
  { id: 2, name: 'Lunch' },
  { id: 3, name: 'Appetizers' },
  { id: 4, name: 'Soups' },
  { id: 5, name: 'Shake' },
  { id: 6, name: 'Fish' },
  { id: 7, name: 'Vegetarian' },
  { id: 8, name: 'Beef' },
  { id: 9, name: 'Poultry' },
  { id: 10, name: 'Pork' },
  { id: 11, name: 'Vegetables' },
  { id: 12, name: 'Salads' },
  { id: 13, name: 'Vegan' },
];

const levels = [
  { id: 1, name: 'Beginner' },
  { id: 2, name: 'Intermidiate' },
  { id: 3, name: 'Chef' },
];

const Step1 = ({ values, setFieldTouched, setFieldValue }) => (
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
          {categories.map(({ id, name }) => (
            <Form.Select.Option key={id} label={name} value={id} />
          ))}
        </Form.Select>
      </Form.Label>
      <Form.Feedback name="category" />
    </Form.FormGroup>
    <Form.FormGroup>
      <Form.Label>
        Level
        <Form.Multichoice>
          {levels.map(({ id, name }) => (
            <Form.Multichoice.Choice
              key={id}
              id={id}
              name="level"
              label={name}
              value={id}
            />
          ))}
        </Form.Multichoice>
      </Form.Label>
    </Form.FormGroup>
  </Wizard.Page>
);

Step1.propTypes = {
  values: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
};

export default Step1;
