import React, { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { hot } from 'react-hot-loader'

import { FullPageLoader } from 'uikit/elements/Loaders'
import Router from "./router";
import theme from "./themes";

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<FullPageLoader />}>
        <Router />
      </Suspense>
    </ThemeProvider>
  </BrowserRouter>
);

export default hot(module)(App);
