import React, { Fragment, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { hot } from 'react-hot-loader';
import { ApolloProvider } from 'react-apollo';

import { FullPageLoader } from 'uikit/elements/Loaders';
import apolloClient from './apollo';
import Router from './router';
import theme from './themes';
import GlobalStyle from './GlobalStyle';

const App = () => (
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
);

export default hot(module)(App);
