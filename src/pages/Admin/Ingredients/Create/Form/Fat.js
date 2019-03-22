import React from 'react';
import { ErrorMessage, Field } from 'formik';
import Form from 'uikit/blocks/Form';
import Heading from 'uikit/elements/Heading';

import { Row } from './style';

export default () => (
  <>
    <Heading level="h4">FATS</Heading>
    <Row columns={3}>
      <Form.FormGroup>
        <Form.Label>
          Monosaturated
          <Form.Input
            name="nutrients.fat.monounsaturated"
            as={Field}
            type="number"
            step="any"
          />
        </Form.Label>
        <ErrorMessage name="nutrients.fat.monounsaturated">
          {msg => <Form.Feedback>{msg}</Form.Feedback>}
        </ErrorMessage>
      </Form.FormGroup>
      <Form.FormGroup>
        <Form.Label>
          Saturated
          <Form.Input
            name="nutrients.fat.saturated"
            as={Field}
            type="number"
            step="any"
          />
        </Form.Label>
        <ErrorMessage name="nutrients.fat.saturated">
          {msg => <Form.Feedback>{msg}</Form.Feedback>}
        </ErrorMessage>
      </Form.FormGroup>
      <Form.FormGroup>
        <Form.Label>
          Polysaturated
          <Form.Input
            name="nutrients.fat.polyunsaturated"
            as={Field}
            type="number"
            step="any"
          />
        </Form.Label>
        <ErrorMessage name="nutrients.fat.polyunsaturated">
          {msg => <Form.Feedback>{msg}</Form.Feedback>}
        </ErrorMessage>
      </Form.FormGroup>
    </Row>
  </>
);
