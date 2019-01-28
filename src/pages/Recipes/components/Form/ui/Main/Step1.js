import React from 'react';
import styled from 'styled-components';
import Form from 'uikit/blocks/Form';

import Wizard from 'components/Wizard';

const Container = styled(Wizard.Page)`
  width: 50%;
`;

export default ({ values, onChange }) => (
  <Container>
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
        min="1"
        max="10"
        placeholder="3"
      />
      <Form.Feedback name="servings" />
    </Form.FormGroup>
    <Form.FormGroup>
      <Form.Label>Total Time (minutes)</Form.Label>
      <Form.Input
        name="totalTime"
        type="number"
        min="0"
        max="500"
        placeholder="30"
      />
    </Form.FormGroup>
    <Form.FormGroup>
      <Form.Label>Category</Form.Label>
      <Form.Select name="category" placeholder="Please choose a category">
        <Form.Select.Option value="volvo">Volvo</Form.Select.Option>
        <Form.Select.Option value="saab">Saab</Form.Select.Option>
        {/* <Form.Select.Option>Food</Form.Select.Option> */}
      </Form.Select>
      <Form.Feedback name="category" />
    </Form.FormGroup>
    <Form.FormGroup>
      <Form.Label>Difficulty</Form.Label>
      <Form.Multichoice>
        <Form.Multichoice.Choice
          id="easy"
          name="difficulty"
          label="Easy"
          value="1"
        />
        <Form.Multichoice.Choice
          id="medium"
          name="difficulty"
          label="Medium"
          value="2"
        />
        <Form.Multichoice.Choice
          id="difficult"
          name="difficulty"
          label="Difficult"
          value="3"
        />
      </Form.Multichoice>
    </Form.FormGroup>
    <Form.FormGroup>
      <Form.Label>
        Description <small>(optional)</small>
      </Form.Label>
      <Form.Textarea
        name="description"
        type="string"
        placeholder="Insert a short description"
        style={{ height: '150px' }}
      />
      <Form.Feedback name="description" />
    </Form.FormGroup>
  </Container>
);
