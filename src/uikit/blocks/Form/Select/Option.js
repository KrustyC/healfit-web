import React from 'react';
import PropTypes from 'prop-types';

import SelectContext from './context';
import { OptionItem } from './style';

const Option = ({ value, label }) => (
  <SelectContext.Consumer>
    {({ size, onSelect }) => (
      <OptionItem onClick={() => onSelect({ label, value })} size={size}>
        {label}
      </OptionItem>
    )}
  </SelectContext.Consumer>
);

Option.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
};

export default Option;
