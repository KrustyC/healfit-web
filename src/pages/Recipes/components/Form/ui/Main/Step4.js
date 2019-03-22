import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Form from 'uikit/blocks/Form';
import { Field } from 'formik';

import { getImageURL } from 'app/helpers/images';
import Wizard from 'components/Wizard';
import Heading from 'uikit/elements/Heading';
import FileUpload from 'uikit/organisms/FileUpload';

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

const Image = styled.img`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.border};
    height: 500px;
    width: 700px;
  `}
`;

const Step4 = ({ values, setFieldValue, setFieldTouched }) => (
  <Wizard.Page>
    <Heading level="h1">More Info</Heading>
    <Form.FormGroup>
      <Image
        src={getImageURL(values.picture, 'w_700,h_600,g_face,c_thumb')}
        alt="recipe image"
      />
      <br />
      <FileUpload
        height="300px"
        onLoad={publicId => setFieldValue('picture', publicId)}
        style={{ marginTop: '2rem' }}
      />
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
    <Form.FormGroup>
      <Form.Label>
        Description
        <Form.Textarea
          value={values.description}
          onChange={e => setFieldValue('description', e.target.value)}
          onFocus={() => setFieldTouched('description')}
          rows="4"
          placeholder="Please add as short description of your recipe..."
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
          Fiber
          <Form.Input
            as={Field}
            name="fiber"
            type="number"
            min="0"
            max="500"
            placeholder="Insert fiber"
          />
        </Form.Label>
        <Form.Feedback name="fiber" />
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
  </Wizard.Page>
);

Step4.propTypes = {
  values: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
};

export default Step4;
