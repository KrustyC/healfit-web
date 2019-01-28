import React from 'react';
import styled from 'styled-components';
import Form from 'uikit/blocks/Form';

import Wizard from 'components/Wizard';

const Container = styled(Wizard.Page)`
  width: 50%;
`;

const categories = [
  { id: 1, name: 'Breakfast' },
  { id: 2, name: 'Lunch' },
  { id: 3, name: 'Appetizers' },
  { id: 4, name: 'Soups' },
  { id: 5, name: 'Shake' },
  { id: 6, name: 'Fish' },
  { id: 7, name: 'Vegetarian' },
  { id: 8, name: 'Beef' },
  { id: 9, name: 'Poultry' },
  { id: 10, name: 'Pork' },
  { id: 11, name: 'Vegetables' },
  { id: 12, name: 'Salads' },
  { id: 13, name: 'Vegan' },
];

const levels = [
  { id: 1, name: 'Beginner' },
  { id: 2, name: 'Intermidiate' },
  { id: 3, name: 'Chef' },
];

export default () => (
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
        placeholder="Insert number of servings"
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
        placeholder="Insert time in minutes"
      />
    </Form.FormGroup>
    <Form.FormGroup>
      <Form.Label>Category</Form.Label>
      <Form.Select name="category" placeholder="Please choose a category">
        <Form.Select.Option value={0} disabled>
          Select a category
        </Form.Select.Option>
        {categories.map(({ id, name }) => (
          <Form.Select.Option key={id} value={id}>
            {name}
          </Form.Select.Option>
        ))}
      </Form.Select>
      <Form.Feedback name="category" />
    </Form.FormGroup>
    <Form.FormGroup>
      <Form.Label>Level</Form.Label>
      <Form.Multichoice>
        {levels.map(({ id, name }) => (
          <Form.Multichoice.Choice
            key={id}
            id={id}
            name="level"
            label={name}
            value={id}
          />
        ))}
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
