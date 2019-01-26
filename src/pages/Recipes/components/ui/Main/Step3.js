import React from 'react';
import { Field } from 'formik';
import Form from 'uikit/blocks/Form';

import Wizard from '../../Wizard';

export default () => (
  <Wizard.Page>
    <Field name="steps" type="text" placeholder="Step" component={Form.Input} />
    {/* <ErrorMessage name="steps" component="div" className="field-error" /> */}
  </Wizard.Page>
);
