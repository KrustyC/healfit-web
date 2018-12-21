import React, { Fragment, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
// import { Router } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { FullPageLoader } from 'uikit/elements/Loaders';
import Router from './router';
import theme from './themes';
import GlobalStyle from './GlobalStyle';

const apolloClient = new ApolloClient({
  uri: `${process.env.API_URL}/graphql`,
});

const App = () => (
  // <Router>
  <ApolloProvider client={apolloClient}>
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Suspense fallback={<FullPageLoader />}>
          <Router />
        </Suspense>
      </Fragment>
    </ThemeProvider>
  </ApolloProvider>
  // </Router>
);

export default hot(module)(App);
