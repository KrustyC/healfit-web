import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
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
    {({
      values,
      touched,
      errors,
      isValid,
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
