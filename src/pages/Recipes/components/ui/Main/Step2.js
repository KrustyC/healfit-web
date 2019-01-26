import React from 'react';
import Form from 'uikit/blocks/Form';

import Wizard from '../../Wizard';

export default () => (
  <Wizard.Page>
    <Form.FormGroup>
      <Form.Input
        name="ingridients"
        type="text"
        placeholder="Add ingridients"
      />
      {/* <Form.Feedback name="ingridients" /> */}
    </Form.FormGroup>
  </Wizard.Page>
);
