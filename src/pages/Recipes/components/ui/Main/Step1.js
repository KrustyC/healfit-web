import React from 'react';
import styled from 'styled-components';
import Form from 'uikit/blocks/Form';

import Heading from 'uikit/elements/Heading';
import Wizard from '../../Wizard';

const Row = styled.div`
  display: flex;
`;

export default () => (
  <Wizard.Page>
    <Form.FormGroup>
      <Form.Label>Title</Form.Label>
      <Form.Input name="title" type="text" placeholder="Insert recipe title" />
      <Form.Feedback name="title" />
    </Form.FormGroup>

    <Row>
      <Form.FormGroup>
        <Form.Label>Servings</Form.Label>
        <Form.Input
          name="servings"
          type="number"
          placeholder="Insert recipe servings"
        />
        <Form.Feedback name="servings" />
      </Form.FormGroup>
      <Form.FormGroup>
        <Form.Label>Total Time</Form.Label>
        <Form.Input
          name="totalTime"
          type="number"
          placeholder="Insert total time required"
        />
        <Form.Feedback name="totalTime" />
      </Form.FormGroup>
      <Form.FormGroup>
        <Form.Label>Difficulty</Form.Label>
        <Form.Input
          name="level"
          type="string"
          placeholder="Please choose a difficulty level"
        />
        <Form.Feedback name="level" />
      </Form.FormGroup>
    </Row>

    <Form.FormGroup>
      <Form.Label>
        Description <small>(optional)</small>
      </Form.Label>
      <Form.Input
        name="description"
        type="string"
        placeholder="Insert a short description"
      />
      <Form.Feedback name="servings" />
    </Form.FormGroup>

    <Form.FormGroup>
      <Form.Label>Category</Form.Label>
      <Form.Input
        name="category"
        type="string"
        placeholder="Please choose a category"
      />
      <Form.Feedback name="category" />
    </Form.FormGroup>
  </Wizard.Page>
);
