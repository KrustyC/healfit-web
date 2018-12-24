import React from 'react';
import PropTypes from 'prop-types';
import Redirect from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { withAuth } from 'app/apollo/auth';

import Container from 'uikit/blocks/Container';
import Form from 'uikit/blocks/Form';
import Button from 'uikit/blocks/Button';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('Please provide your email'),
  password: Yup.string().required('Please provide your password'),
});

const Login = gql`
  mutation login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      token
      account {
        firstName
        lastName
      }
    }
  }
`;

const SignIn = ({ setCurrentUser, isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container size="large">
      <Mutation mutation={Login}>
        {login => (
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={values => {
              login({ variables: values })
                .then(res => console.log('Success', res))
                .then(res => setCurrentUser(res.user)) // Need to be done
                .catch(err => console.log('Error', err));
            }}
            validationSchema={validationSchema}
          >
            {({
              values,
              touched,
              errors,
              // dirty,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              // handleReset,
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
                <Button type="submit" size="large" disabled={isSubmitting}>
                  Login
                </Button>
              </Form>
            )}
          </Formik>
        )}
      </Mutation>
    </Container>
  );
};

SignIn.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  setCurrentUser: PropTypes.func.isRequired,
};

export default withAuth(SignIn);
