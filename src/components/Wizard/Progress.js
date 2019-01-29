import React from 'react';
import PropTypes from 'prop-types';
import WizardContext from './context';

const Progress = ({ children }) => (
  <WizardContext.Consumer>
    {({ page }) => children({ page })}
  </WizardContext.Consumer>
);

Progress.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Progress;
