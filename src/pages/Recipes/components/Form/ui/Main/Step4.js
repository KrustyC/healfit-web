import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Form from 'uikit/blocks/Form';
import { Field } from 'formik';

import { getImageURL } from 'app/helpers/images';
import Wizard from 'uikit/organisms/Wizard';
import Heading from 'uikit/elements/Heading';
import FileUpload from 'uikit/organisms/FileUpload';
import CameraSvg from 'assets/icons/photo-camera.svg';

const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;

    ${Form.FormGroup} {
      margin-right: ${theme.margin.md};
      width: 33%;
    }

    @media (max-width: ${theme.sizes.md}) {
      flex-direction: column;
      ${Form.FormGroup} {
        margin-right: 0;
        width: 100%;
      }
    }
  `}
`;

const Picture = styled.div`
  ${({ theme }) => css`
    position: relative;
    height: 500px;
    width: 700px;

    @media (max-width: ${theme.sizes.md}) {
      height: 300px;
      width: calc(100vw - (${theme.padding.md} * 2));
    }
  `}
`;

const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    border: 1px solid ${theme.colors.border};
  `}
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0.1;
  transition: 0.5s ease;
  background-color: #fcf8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  svg {
    width: 50px;
    height: 50px;
  }
`;

const Step4 = ({ values, setFieldValue, setFieldTouched }) => (
  <Wizard.Page>
    <Heading level="h1" noPadding>
      More Info
    </Heading>
    <Form.FormGroup>
      <Picture>
        <Image
          src={getImageURL(values.picture, 'w_700,h_600,g_face,c_thumb')}
          alt="recipe image"
        />
        <FileUpload onLoad={publicId => setFieldValue('picture', publicId)}>
          {({ onShowUploadWidget }) => (
            <Overlay>
              <CameraSvg onClick={onShowUploadWidget} />
            </Overlay>
          )}
        </FileUpload>
      </Picture>
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
    <Info>
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
    </Info>
  </Wizard.Page>
);

Step4.propTypes = {
  values: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
};

export default Step4;
