import React, { Fragment, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import { FullPageLoader } from 'uikit/elements/Loaders';
import Router from './router';
import theme from './themes';
import GlobalStyle from './GlobalStyle';

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Suspense fallback={<FullPageLoader />}>
          <Router />
        </Suspense>
      </Fragment>
    </ThemeProvider>
  </BrowserRouter>
);

export default hot(module)(App);
