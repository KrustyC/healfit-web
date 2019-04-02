import React, { useState, useContext } from 'react';
import history from 'app/router/history';
import { Helmet } from 'react-helmet';
import { RootContext } from 'app/contexts/RootContext';
import LoginImg from 'assets/images/login.jpg';

import Heading from 'uikit/elements/Heading';
import Link from 'uikit/elements/Link';
import P from 'uikit/elements/P';

import Form from './Form';
import {
  Container,
  Header,
  Bottom,
  Frame,
  FormSide,
  ImgSide,
  FormContainer,
  StyledAlert,
} from '../components';

const SignIn = () => {
  const rootContext = useContext(RootContext);
  const [error, setError] = useState(null);

  const onHandleSubmit = async ({ email, password }, { setSubmitting }) => {
    try {
      await rootContext.onLogin({ email, password });
      return history.push('/dashboard');
    } catch (loginError) {
      const errors = loginError.graphQLErrors.map(x => x.message);
      setError(errors[0]);
      setSubmitting(false);
      return setTimeout(() => setError(null), 3000);
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign In | Healfit</title>
        <meta name="description" content="Sign In to Healfit" />
      </Helmet>
      <Container>
        <ImgSide url={LoginImg} />
        <FormSide>
          <Header>
            <Heading>Healfit</Heading>
          </Header>
          <Frame>
            <FormContainer>
              {error && <StyledAlert type="error">{error}</StyledAlert>}
              <Form onSubmit={onHandleSubmit} />
              <P size="small">
                Do you not have an account yet?{' '}
                <Link to="/auth/signup">Sign Up</Link>
              </P>
            </FormContainer>
          </Frame>
          <Bottom />
        </FormSide>
      </Container>
    </>
  );
};

export default SignIn;
