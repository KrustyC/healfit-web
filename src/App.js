import React, { Fragment, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { FullPageLoader } from 'uikit/elements/Loaders';
import Router from './router';
import theme from './themes';
import GlobalStyle from './GlobalStyle';

const apolloClient = new ApolloClient({
  uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql',
});

const App = () => (
  <BrowserRouter>
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
  </BrowserRouter>
);

export default hot(module)(App);
