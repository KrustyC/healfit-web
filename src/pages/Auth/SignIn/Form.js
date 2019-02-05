import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Link from 'uikit/elements/Link';
import P from 'uikit/elements/P';
import Form from 'uikit/blocks/Form';
import Button from 'uikit/blocks/Button';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('Please provide your email'),
  password: Yup.string().required('Please provide your password'),
});

const SignInForm = ({ onSubmit }) => (
  <Formik
    initialValues={{ email: '', password: '', showPassword: false }}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
    {({ values, handleChange, isSubmitting, isValid, handleSubmit }) => (
      <Form onSubmit={handleSubmit}>
        <Form.FormGroup>
          <Form.Label>Email</Form.Label>
          <Form.Input
            as={Field}
            name="email"
            type="text"
            placeholder="hello@healfit.co.uk"
          />
          <ErrorMessage name="email">
            {msg => <Form.Feedback>{msg}</Form.Feedback>}
          </ErrorMessage>
        </Form.FormGroup>
        <Form.FormGroup>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Input
            as={Field}
            name="password"
            type={values.showPassword ? 'text' : 'password'}
            placeholder="*******"
          />
          <ErrorMessage name="password">
            {msg => <Form.Feedback>{msg}</Form.Feedback>}
          </ErrorMessage>
        </Form.FormGroup>
        <Form.Checkbox
          name="showPassword"
          checked={values.showPassword}
          onChange={handleChange}
        >
          <P size="small" style={{ margin: 0 }}>
            Show Password
          </P>
        </Form.Checkbox>

        <P size="small" style={{ marginTop: '5px' }}>
          <Link to="/auth/forgot-password">Forgot Password?</Link>
        </P>
        <Button
          type="submit"
          size="large"
          color="primary"
          loading={isSubmitting}
          disabled={isSubmitting || !isValid}
        >
          Sign In
        </Button>
      </Form>
    )}
  </Formik>
);

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignInForm;
