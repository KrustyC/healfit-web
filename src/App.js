import React, { Fragment, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { hot } from 'react-hot-loader';
import { ApolloProvider } from 'react-apollo';
import ReactGA from 'react-ga';

import { ToastProvider } from 'uikit/blocks/Toast';
import apolloClient from './apollo';
import Router from './router';
import { RootProvider } from './contexts/RootContext';
import { DrawerProvider } from './contexts/DrawerContext';
import theme from './themes';
import GlobalStyle from './GlobalStyle';

if (process.env.NODE_ENV !== 'development') {
  ReactGA.initialize(process.env.GA_API_KEY);
}

const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
};

const App = () => {
  useEffect(() => {
    registerServiceWorker();
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyle />
          <ToastProvider>
            <RootProvider>
              <DrawerProvider>
                <Router />
              </DrawerProvider>
            </RootProvider>
          </ToastProvider>
        </Fragment>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default hot(module)(App);
