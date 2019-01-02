import React, { Fragment, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { hot } from 'react-hot-loader';
import { ApolloProvider } from 'react-apollo';

import { FullPageLoader } from 'uikit/elements/Loaders';
import apolloClient from './apollo';
import Router from './router';
import Wrapper from './Wrapper';
import theme from './themes';
import GlobalStyle from './GlobalStyle';

const App = () => (
  <ApolloProvider client={apolloClient}>
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Suspense fallback={<FullPageLoader />}>
          <Wrapper>
            <Router />
          </Wrapper>
        </Suspense>
      </Fragment>
    </ThemeProvider>
  </ApolloProvider>
);

export default hot(module)(App);
