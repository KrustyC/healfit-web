import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Heading from 'uikit/elements/Heading';
import Form from 'uikit/blocks/Form';
import Button from 'uikit/blocks/Button';

const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Panel = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background: ${theme.colors.white};
    background: #faf8f8;
    border: 1px solid ${theme.colors.border};
    border-radius: 5px;
    width: 100%;
    margin: ${theme.margin.lg} ${theme.margin.sm};
    padding: ${theme.margin.lg};

    img {
      width: 15px;
      height: 15px;
    }
  `}
`;

const EditOrCreateRecipeForm = ({ edit, onSubmit }) => (
  <StyledForm>
    <Panel>
      <Heading level="h3">Title</Heading>
      <Form.Input
        id="title"
        placeholder="Erite your recipe title title"
        type="text"
        //   value={values.title}
        //   onChange={handleChange}
        //   onBlur={handleBlur}
      />
    </Panel>
    <Panel>
      <Heading level="h3">General Info</Heading>
      <Row>
        <Form.FormGroup>
          <Form.Label>Preparation Time</Form.Label>
          <Form.Input
            noMargin
            id="ingredients"
            placeholder="Erite your recipe title title"
            type="text"
            //   value={values.title}
            //   onChange={handleChange}
            //   onBlur={handleBlur}
          />
        </Form.FormGroup>
        <Form.FormGroup>
          <Form.Label>Servings</Form.Label>
          <Form.Input
            noMargin
            id="ingredients"
            placeholder="Erite your recipe title title"
            type="text"
            //   value={values.title}
            //   onChange={handleChange}
            //   onBlur={handleBlur}
          />
        </Form.FormGroup>
      </Row>
      <Row>
        <Form.FormGroup>
          <Form.Label>Calories</Form.Label>
          <Form.Input
            noMargin
            id="ingredients"
            placeholder="Erite your recipe title title"
            type="text"
            //   value={values.title}
            //   onChange={handleChange}
            //   onBlur={handleBlur}
          />
        </Form.FormGroup>
        <Form.FormGroup>
          <Form.Label>Cook Time</Form.Label>
          <Form.Input
            noMargin
            id="ingredients"
            placeholder="Erite your recipe title title"
            type="text"
            //   value={values.title}
            //   onChange={handleChange}
            //   onBlur={handleBlur}
          />
        </Form.FormGroup>
        <Form.FormGroup>
          <Form.Label>Preparation Time</Form.Label>
          <Form.Input
            noMargin
            id="ingredients"
            placeholder="Erite your recipe title title"
            type="text"
            //   value={values.title}
            //   onChange={handleChange}
            //   onBlur={handleBlur}
          />
        </Form.FormGroup>
      </Row>
    </Panel>
    <Panel>
      <Heading level="h3">Ingredients</Heading>
      <Row>
        <Form.Input
          noMargin
          id="ingredients"
          placeholder="Erite your recipe title title"
          type="text"
          //   value={values.title}
          //   onChange={handleChange}
          //   onBlur={handleBlur}
        />
        <Button
          rounded
          onClick={onSubmit}
          size="large"
          color="primary"
          style={{ marginLeft: '20px' }}
        >
          {/* eslint-disable-next-line global-require */}
          <img src={require('assets/icons/plus.svg')} alt="plus" />
        </Button>
      </Row>
    </Panel>
    <Panel>
      <Heading level="h3">Method</Heading>
      <Form.Textarea
        id="title"
        placeholder="Erite your recipe title title"
        type="text"
        //   value={values.title}
        //   onChange={handleChange}
        //   onBlur={handleBlur}
      />
    </Panel>
    <Button onClick={onSubmit} size="large" color="primary">
      {edit ? 'Edit' : 'Create'} Recipe
    </Button>
  </StyledForm>
);

EditOrCreateRecipeForm.propTypes = {
  edit: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
};

EditOrCreateRecipeForm.defaultProps = {
  edit: false,
};

export default EditOrCreateRecipeForm;
