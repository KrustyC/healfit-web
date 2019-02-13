import React from 'react';
import styled, { css } from 'styled-components';
import Form from 'uikit/blocks/Form';
import { Field } from 'formik';

import Wizard from 'components/Wizard';
import Heading from 'uikit/elements/Heading';

import FileUpload from './FileUpload';

const Row = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;

    ${Form.FormGroup} {
      margin-right: ${theme.margin.md};
      width: 33%;
    }
  `}
`;

export default () => (
  <Wizard.Page>
    <Heading level="h1">More Info</Heading>
    <Form.FormGroup>
      <div style={{ width: '100%' }}>
        <b>Picture</b>
        <FileUpload
          onLoad={file => console.log(file)}
          style={{ marginTop: '2rem' }}
        />
      </div>
    </Form.FormGroup>
    <Form.FormGroup>
      <Form.Label>
        Calories
        <Form.Input
          as={Field}
          name="calories"
          type="number"
          min="0"
          max="500"
          placeholder="Insert calories"
        />
      </Form.Label>
      <Form.Feedback name="calories" />
    </Form.FormGroup>
    <Row>
      <Form.FormGroup>
        <Form.Label>
          Carbohydrates
          <Form.Input
            as={Field}
            name="carbohydrates"
            type="number"
            min="0"
            max="500"
            placeholder="Insert carbohydrates"
          />
        </Form.Label>
        <Form.Feedback name="carbohydrates" />
      </Form.FormGroup>
      <Form.FormGroup>
        <Form.Label>
          Protein
          <Form.Input
            as={Field}
            name="protein"
            type="number"
            min="0"
            max="500"
            placeholder="Insert protein"
          />
        </Form.Label>
        <Form.Feedback name="protein" />
      </Form.FormGroup>
      <Form.FormGroup>
        <Form.Label>
          Fat
          <Form.Input
            as={Field}
            name="fat"
            type="number"
            min="0"
            max="500"
            placeholder="Insert fat"
          />
        </Form.Label>
        <Form.Feedback name="fat" />
      </Form.FormGroup>
    </Row>
    <Form.FormGroup>
      <Form.Label>
        Description
        <Form.Textarea
          as={Field}
          component="textarea"
          name="description"
          type="string"
          placeholder="Insert a short description"
          css="height: 150px;"
        />
      </Form.Label>
      <Form.Feedback name="description" />
    </Form.FormGroup>
  </Wizard.Page>
);
