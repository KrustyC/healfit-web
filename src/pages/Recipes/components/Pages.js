import React from 'react';
import PropTypes from 'prop-types';
import WizardContext from './context';

const Pages = ({ children }) => (
  <WizardContext>
    {({ page }) => {
      const activePage = React.Children.toArray(children)[page];
      return React.cloneElement(activePage);
    }}
  </WizardContext>
);

Pages.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Pages;
