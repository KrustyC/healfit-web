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
  firstName: Yup.string().required('Please provide your First Name'),
  lastName: Yup.string().required('Please provide your Last Name'),
  password: Yup.string()
    .min(8, 'Password has to be longer than 8 characters!')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.[\W])/,
      'Password must contain at least one upppercase character, one lowercase character, one number and one special character'
    )
    .required('Please provide your password!'),
});

const initialValues = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
};

const UserSignUpForm = ({ onSubmit }) => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
    {({
      values,
      touched,
      errors,
      isSubmitting,
      handleChange,
      isValid,
      handleBlur,
      handleSubmit,
    }) => (
      <Form onSubmit={handleSubmit}>
        <Form.FormGroup>
          <Form.Label htmlFor="email">Email</Form.Label>
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
          <Form.Label htmlFor="firstName">First Name</Form.Label>
          <Form.Input
            id="firstName"
            placeholder="Enter your first name"
            type="text"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Form.Feedback show={errors.firstName && touched.firstName}>
            {errors.firstName}
          </Form.Feedback>
        </Form.FormGroup>
        <Form.FormGroup>
          <Form.Label htmlFor="lastName">Last Name</Form.Label>
          <Form.Input
            id="lastName"
            placeholder="Enter your Last Name"
            type="text"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Form.Feedback show={errors.lastName && touched.lastName}>
            {errors.lastName}
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
        <Button
          color="primary"
          type="submit"
          size="large"
          disabled={isSubmitting || !isValid}
          style={{ marginTop: '15px' }}
        >
          Sign Up
        </Button>
      </Form>
    )}
  </Formik>
);

UserSignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default UserSignUpForm;
