import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Form from 'uikit/blocks/Form';
import Button from 'uikit/blocks/Button';
import Link from 'uikit/elements/Link';
import P from 'uikit/elements/P';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('Please provide your email'),
  firstName: Yup.string().required('Please provide your First Name'),
  lastName: Yup.string().required('Please provide your Last Name'),
  password: Yup.string()
    .min(8, 'Password has to be longer than 8 characters!')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      'Password must contain at least one upppercase character, one lowercase character, one special character and one number'
    )
    .required('Please provide your password!'),
  acceptTermAndCondition: Yup.boolean()
    .oneOf([true], 'Please accept out T&Cs!')
    .required('Please accept out T&Cs!'),
});

const initialValues = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  acceptTermAndCondition: false,
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
        <Form.Checkbox
          name="acceptTermAndCondition"
          checked={values.acceptTermAndCondition}
          value="Bike"
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <P size="small" style={{ margin: 0 }}>
            By clicking this button, you agree to{' '}
            <Link to="/legal/terms-and-conditions">
              Mailchimp{"'"}s Anti-spam Policy {'&'} Terms of Use.
            </Link>
          </P>
        </Form.Checkbox>
        <Form.Feedback
          show={errors.acceptTermAndCondition && touched.acceptTermAndCondition}
        >
          {errors.acceptTermAndCondition}
        </Form.Feedback>
        <Button
          color="primary"
          type="submit"
          size="large"
          disabled={isSubmitting || !isValid}
          loading={isSubmitting}
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
