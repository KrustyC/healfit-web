import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Wizard from 'uikit/organisms/Wizard';
import Editor from 'uikit/organisms/Editor';
import Heading from 'uikit/elements/Heading';

const Step3 = ({ values, setFieldValue, setFieldTouched }) => {
  const [touched, setIsTouched] = useState(false);

  const onChange = value => {
    if (!touched) {
      setIsTouched(true);
      setFieldTouched('method');
    }

    setFieldValue('method', value);
  };

  return (
    <Wizard.Page>
      <Heading level="h1" noPadding>
        Method
      </Heading>
      <Editor
        placeholder="Write your recipe method..."
        value={values.method}
        onChange={onChange}
      />
    </Wizard.Page>
  );
};

Step3.propTypes = {
  values: PropTypes.shape({
    method: PropTypes.object.isRequired,
  }).isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
};

export default Step3;
