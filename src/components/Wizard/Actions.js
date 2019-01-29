import React from 'react';
import PropTypes from 'prop-types';
import WizardContext from './context';

const Actions = ({ children }) => (
  <WizardContext.Consumer>
    {({ page, isFirstPage, isLastPage, onPrevious, onSubmit }) =>
      children({ page, isFirstPage, isLastPage, onPrevious, onSubmit })
    }
  </WizardContext.Consumer>
);

Actions.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Actions;
