import React from 'react';
import Form from 'uikit/blocks/Form';

import MultiStepForm from '../MultiStepForm';

export default () => (
  <MultiStepForm.Page>
    <Form.FormGroup>
      <Form.Input
        name="ingridients"
        type="text"
        placeholder="Add ingridients"
      />
      <Form.Feedback name="ingridients" />
    </Form.FormGroup>
  </MultiStepForm.Page>
);
