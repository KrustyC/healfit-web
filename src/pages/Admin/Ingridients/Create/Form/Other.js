import React from 'react';
import { ErrorMessage, Field } from 'formik';
import Form from 'uikit/blocks/Form';

import { Row } from './style';

export default () => (
  <Row columns={3}>
    <Form.FormGroup>
      <Form.Label>
        Potassium
        <Form.Input name="potassium" as={Field} type="number" step="any" />
      </Form.Label>
      <ErrorMessage name="potassium">
        {msg => <Form.Feedback>{msg}</Form.Feedback>}
      </ErrorMessage>
    </Form.FormGroup>
    <Form.FormGroup>
      <Form.Label>
        Protein
        <Form.Input name="protein" as={Field} type="number" step="any" />
      </Form.Label>
      <ErrorMessage name="protein">
        {msg => <Form.Feedback>{msg}</Form.Feedback>}
      </ErrorMessage>
    </Form.FormGroup>
    <Form.FormGroup>
      <Form.Label>
        Sodium
        <Form.Input name="sodium" as={Field} type="number" step="any" />
      </Form.Label>
      <ErrorMessage name="sodium">
        {msg => <Form.Feedback>{msg}</Form.Feedback>}
      </ErrorMessage>
    </Form.FormGroup>
  </Row>
);
