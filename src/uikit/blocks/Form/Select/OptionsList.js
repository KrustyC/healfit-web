import React from 'react';
import PropTypes from 'prop-types';

import { Empty, Options } from './style';

const OptionsList = ({ show, children }) => (
  <Options show={show}>
    {children.length === 0 ? <Empty>No options</Empty> : children}
  </Options>
);

OptionsList.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired, // @TODO should be array of objects
};

export default OptionsList;
