import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Form from 'uikit/blocks/Form';
import { Field } from 'formik';

import { Image as CloudinaryImage, Transformation } from 'cloudinary-react';
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

const Image = styled(CloudinaryImage)`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.border};
    height: 300px;
    width: 400px;
  `}
`;

const Step4 = ({ values, setFieldValue }) => (
  <Wizard.Page>
    <Heading level="h1">More Info</Heading>
    <Form.FormGroup>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <b>Picture</b>
        <Image publicId={values.picture}>
          <Transformation dpr="auto" responsive width="auto" crop="scale" />
          {!values.picture && (
            <Transformation
              overlay={{
                fontFamily: 'Cookie',
                fontSize: 40,
                fontWeight: 'bold',
                text: 'Love',
              }}
              effect="colorize"
              color="#f08"
            />
          )}
        </Image>
        <br />
        <FileUpload
          height="300px"
          onLoad={publicId => setFieldValue('picture', publicId)}
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

Step4.propTypes = {
  values: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired,
};

export default Step4;
