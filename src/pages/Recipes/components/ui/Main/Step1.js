import React from 'react';
import styled from 'styled-components';
import Form from 'uikit/blocks/Form';

import Heading from 'uikit/elements/Heading';
import Wizard from '../../Wizard';

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
      </Row>
      <Form.FormGroup>
        <Form.Label>Total Time</Form.Label>
        <Row>
          <>
            <Row>
              <Form.Input name="totalTimeHours" type="number" placeholder="1" />
              <b>h</b>
            </Row>
            <Form.Feedback name="totalTimeHours" />
          </>
          :
          <>
            <Row>
              <Form.Input
                name="totalTimeMinutes"
                type="number"
                placeholder="30"
              />
              <b>m</b>
            </Row>
            <Form.Feedback name="totalTimeMinutes" />
          </>
        </Row>
      </Form.FormGroup>
      <Form.FormGroup>
        <Form.Label>Difficulty</Form.Label>
        <Form.Multichoice selected="1">
          <Form.Multichoice.Item key="1" id="1" value="1">
            Easy
          </Form.Multichoice.Item>
          <Form.Multichoice.Item key="2" id="2" value="2">
            Medium
          </Form.Multichoice.Item>
          <Form.Multichoice.Item key="3" id="3" value="3">
            Difficult
          </Form.Multichoice.Item>
        </Form.Multichoice>
      </Form.FormGroup>
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
    </Container>
  )
);
