import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Field } from 'formik';
import Form from 'uikit/blocks/Form';
import withGlobalData from 'hoc/withGlobalData';

import { Row } from './style';

const General = ({
  globalData: { ingredientsCategories },
  setFieldTouched,
  setFieldValue,
  values,
}) => (
  <>
    <Form.FormGroup>
      <Form.Label>
        Name
        <Form.Input
          name="name"
          as={Field}
          type="string"
          placeholder="Add ingredient name..."
        />
      </Form.Label>
      <ErrorMessage name="name">
        {msg => <Form.Feedback>{msg}</Form.Feedback>}
      </ErrorMessage>
    </Form.FormGroup>
    <Row columns={2}>
      <Form.FormGroup>
        <Form.FormGroup>
          <Form.Label>
            Category
            <Form.Select
              placeholder="Select a category"
              value={values.category || {}}
              onBlur={() => setFieldTouched('category', true)}
              onChange={category => setFieldValue('category', category)}
            >
              {ingredientsCategories.map(({ id, name }) => (
                <Form.Select.Option key={id} label={name} value={id} />
              ))}
            </Form.Select>
          </Form.Label>
          <ErrorMessage name="catgeory">
            {msg => <Form.Feedback>{msg}</Form.Feedback>}
          </ErrorMessage>
        </Form.FormGroup>
      </Form.FormGroup>
      <Form.FormGroup>
        <Form.Label>
          Calories
          <Form.Input name="calories" as={Field} type="number" step="any" />
        </Form.Label>
        <ErrorMessage name="calories">
          {msg => <Form.Feedback>{msg}</Form.Feedback>}
        </ErrorMessage>
      </Form.FormGroup>
    </Row>
  </>
);

General.propTypes = {
  globalData: PropTypes.shape({
    ingredientsCategories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
};

export default withGlobalData(General);
