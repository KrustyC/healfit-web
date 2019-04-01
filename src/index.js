import React from 'react';
import ReactDOM from 'react-dom';
import bugsnag from '@bugsnag/js';
import bugsnagReact from '@bugsnag/plugin-react';
import './duik/styles.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

const bugsnagClient = bugsnag(process.env.BUGSNAG_API_KEY);
bugsnagClient.use(bugsnagReact, React);
registerServiceWorker();

const ErrorBoundary = bugsnagClient.getPlugin('react');

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
);
