import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
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
    initialValues={{ email: '', password: '' }}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
    {({
      values,
      touched,
      errors,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit,
    }) => (
      <Form onSubmit={handleSubmit}>
        <Form.FormGroup>
          <Form.Label htmlFor="name">Email</Form.Label>
          <Form.Input
            id="email"
            placeholder="Enter your email"
            type="text"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Form.Feedback show={errors.email && touched.email}>
            {errors.email}
          </Form.Feedback>
        </Form.FormGroup>
        <Form.FormGroup>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Password
            id="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Form.Feedback show={errors.password && touched.password}>
            {errors.password}
          </Form.Feedback>
        </Form.FormGroup>
        <P size="small">
          <Link to="/auth/forgot-password">Forgot Password?</Link>
        </P>
        <Button
          type="submit"
          size="large"
          color="primary"
          disabled={isSubmitting}
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
