import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import gql from 'graphql-tag';
import PossibleStates from 'possible-states';
import { compose, graphql } from 'react-apollo';
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

const LoginMutation = gql`
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

class SignIn extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,
    setCurrentUser: PropTypes.func.isRequired,
    setAuthToken: PropTypes.func.isRequired,
  };

  state = {
    ui: PossibleStates('idle', 'error<reason>', 'authenticated'),
  };

  componentDidMount() {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      this.setState(({ ui }) => ({ ui: ui.toAuthenticated() }));
    }
  }

  onHandleSubmit = async values => {
    try {
      const result = await this.props.login({ variables: values });
      const { account, token } = result.data.login;

      await this.props.setCurrentUser({ variables: { user: account } });
      await this.props.setAuthToken({ variables: { token } });
      return this.setState(({ ui }) => ({ ui: ui.toAuthenticated() }));
    } catch (error) {
      console.log('error', error);
      return this.setState(({ ui }) => ({ ui: ui.toError(error) }));
    }
  };

  render() {
    const { ui } = this.state;

    console.log(ui.current());
    if (ui.current() === 'authenticated') {
      return <Redirect to="/dashboard" />;
    }

    return (
      <Container size="large">
        {ui.whenError(({ reason }) => (
          <h1>Error</h1>
        ))}
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={this.onHandleSubmit}
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
      </Container>
    );
  }
}

export default compose(
  graphql(LoginMutation, { name: 'login' }),
  withAuth
)(SignIn);
