import React from 'react';
import styled from 'styled-components';
import Form from 'uikit/blocks/Form';

import Heading from 'uikit/elements/Heading';
import Wizard from 'components/Wizard';

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled(Wizard.Page)`
  width: 100%;
`;

export default ({ values, onChange }) => (
  console.log(values),
  (
    <Container>
      <Form.FormGroup width="50%">
        <Form.Label>Title</Form.Label>
        <Form.Input
          name="title"
          type="text"
          placeholder="Insert recipe title"
        />
        <Form.Feedback name="title" />
      </Form.FormGroup>
      {/* <Row> */}
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
        <Form.Label>Total Time</Form.Label>
        <Form.Input name="totalTime" type="time" placeholder="30" />
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
      {/* </Row> */}
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
      <Form.FormGroup width="50%">
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
  )
);
