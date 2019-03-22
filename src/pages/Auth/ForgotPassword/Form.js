import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Form from 'uikit/blocks/Form';
import Button from 'uikit/blocks/Button';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('Please provide your email'),
});

const SignInForm = ({ onSubmit }) => (
  <Formik
    initialValues={{ email: '' }}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
    {({ isValid, isSubmitting, handleSubmit }) => (
      <Form onSubmit={handleSubmit}>
        <Form.FormGroup>
          <Form.Label htmlFor="name">
            Email
            <Form.Input
              id="email"
              name="email"
              placeholder="Enter your email"
              type="text"
              as={Field}
            />
          </Form.Label>
          <ErrorMessage name="email">
            {msg => <Form.Feedback>{msg}</Form.Feedback>}
          </ErrorMessage>
        </Form.FormGroup>
        <Button
          type="submit"
          size="large"
          color="primary"
          disabled={isSubmitting || !isValid}
        >
          Reset Password
        </Button>
      </Form>
    )}
  </Formik>
);

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignInForm;
