import React, { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import Loader from 'uikit/elements/Loader'
import Router from "./router";
import theme from "./themes";

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loader />}>
        <Router />
      </Suspense>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
