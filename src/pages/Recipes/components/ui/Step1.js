import React from 'react';
import Form from 'uikit/blocks/Form';

import MultiStepForm from '../MultiStepForm';

export default () => (
  <MultiStepForm.Page>
    <Form.FormGroup>
      <Form.Label>Title</Form.Label>
      <Form.Input name="title" type="text" placeholder="Insert recipe title" />
      <Form.Feedback name="title" />
    </Form.FormGroup>

    <Form.FormGroup>
      <Form.Label>Servings</Form.Label>
      <Form.Input
        name="servings"
        type="number"
        placeholder="Insert recipe servings"
      />
    </Form.FormGroup>
  </MultiStepForm.Page>
);
