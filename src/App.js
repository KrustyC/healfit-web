import React, { Fragment, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { hot } from 'react-hot-loader';
import { ApolloProvider } from 'react-apollo';
import ReactGA from 'react-ga';

import { FullPageLoader } from 'uikit/elements/Loaders';
import apolloClient from './apollo';
import Router from './router';
import Wrapper from './Wrapper';
import theme from './themes';
import GlobalStyle from './GlobalStyle';

if (process.env.APP_ENV !== 'development') {
  ReactGA.initialize(process.env.GA_API_KEY);
}

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
