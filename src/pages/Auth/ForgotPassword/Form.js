import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Form from 'uikit/blocks/Form';
import Button from 'uikit/blocks/Button';

const StyledForm = styled(Form)`
  width: 60%;
  margin: 50px 0px;
`;

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
      <StyledForm onSubmit={handleSubmit}>
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
      </StyledForm>
    )}
  </Formik>
);

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignInForm;
