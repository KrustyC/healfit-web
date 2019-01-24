import React from 'react';
import { Field, ErrorMessage } from 'formik';
import Form from 'uikit/blocks/Form';

import MultiStepForm from '../MultiStepForm';

export default () => (
  <MultiStepForm.Page>
    <Field
      name="steps"
      type="text"
      placeholder="Step"
      component={Form.Input}
      // validate={required}
    />
    <ErrorMessage name="steps" component="div" className="field-error" />
  </MultiStepForm.Page>
);
