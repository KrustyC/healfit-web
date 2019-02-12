import React from 'react';
import PropTypes from 'prop-types';
import Form from 'uikit/blocks/Form';
import { Field } from 'formik';

import Wizard from 'components/Wizard';
import Heading from 'uikit/elements/Heading';

const Step1 = ({ values, setFieldTouched, setFieldValue }) => (
  <Wizard.Page>
    <Heading level="h1">Ingridients</Heading>

    <Form.FormGroup>
      <Form.Label>
        Description <small>(optional)</small>
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

Step1.propTypes = {
  values: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
};

export default Step1;
