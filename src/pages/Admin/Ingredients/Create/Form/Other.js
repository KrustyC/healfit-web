import React from 'react';
import { ErrorMessage, Field } from 'formik';
import Form from 'uikit/blocks/Form';

import { Row } from './style';

export default () => (
  <Row columns={4}>
    <Form.FormGroup>
      <Form.Label>
        Cholesterol
        <Form.Input
          name="nutrients.cholesterol"
          as={Field}
          type="number"
          step="any"
        />
      </Form.Label>
      <ErrorMessage name="nutrients.cholesterol">
        {msg => <Form.Feedback>{msg}</Form.Feedback>}
      </ErrorMessage>
    </Form.FormGroup>
    <Form.FormGroup>
      <Form.Label>
        Potassium
        <Form.Input
          name="nutrients.potassium"
          as={Field}
          type="number"
          step="any"
        />
      </Form.Label>
      <ErrorMessage name="nutrients.potassium">
        {msg => <Form.Feedback>{msg}</Form.Feedback>}
      </ErrorMessage>
    </Form.FormGroup>
    <Form.FormGroup>
      <Form.Label>
        Protein
        <Form.Input
          name="nutrients.protein"
          as={Field}
          type="number"
          step="any"
        />
      </Form.Label>
      <ErrorMessage name="nutrients.protein">
        {msg => <Form.Feedback>{msg}</Form.Feedback>}
      </ErrorMessage>
    </Form.FormGroup>
    <Form.FormGroup>
      <Form.Label>
        Sodium
        <Form.Input
          name="nutrients.sodium"
          as={Field}
          type="number"
          step="any"
        />
      </Form.Label>
      <ErrorMessage name="nutrients.sodium">
        {msg => <Form.Feedback>{msg}</Form.Feedback>}
      </ErrorMessage>
    </Form.FormGroup>
  </Row>
);
