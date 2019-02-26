import React from 'react';
import { ErrorMessage, Field } from 'formik';
import Form from 'uikit/blocks/Form';
import Heading from 'uikit/elements/Heading';

import { Row } from './style';

export default () => (
  <>
    <Heading level="h4">CARBOHYDRATES</Heading>
    <Row columns={2}>
      <Form.FormGroup>
        <Form.Label>
          Fiber
          <Form.Input
            name="nutrients.carbohydrate.fiber"
            as={Field}
            type="number"
            step="any"
          />
        </Form.Label>
        <ErrorMessage name="nutrients.carbohydrate.fiber">
          {msg => <Form.Feedback>{msg}</Form.Feedback>}
        </ErrorMessage>
      </Form.FormGroup>
      <Form.FormGroup>
        <Form.Label>
          Sugar
          <Form.Input
            name="nutrients.carbohydrate.sugar"
            as={Field}
            type="number"
            step="any"
          />
        </Form.Label>
        <ErrorMessage name="nutrients.carbohydrate.sugar">
          {msg => <Form.Feedback>{msg}</Form.Feedback>}
        </ErrorMessage>
      </Form.FormGroup>
    </Row>
  </>
);
