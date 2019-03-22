import React from 'react';
import PropTypes from 'prop-types';
// import Tooltip from 'uikit/blocks/Tooltip';

import { ChipWrapper, ChipIcon, ChipText } from './style';

const Chip = ({ children: label, onRemove, size }) => (
  // <Tooltip content={label}>
  <ChipWrapper size={size}>
    <ChipText size={size}>{label}</ChipText>
    <ChipIcon className="fa fa-times" onClick={onRemove} size={size} />
  </ChipWrapper>
  // </Tooltip>
);

Chip.propTypes = {
  children: PropTypes.any.isRequired,
  size: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Chip;
