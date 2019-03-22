import React from 'react';

export default React.createContext({
  showList: false,
  focus: false,
  query: '',
  multi: false,
  size: 'default',
  valueLabelMapping: new Map(),
  selected: [],
  placeholder: 'Select...',
  onAddOption: () => null,
  onRemoveOption: () => null,
  onRemoveAll: () => null,
  onInputChange: () => null,
  onFocus: () => null,
  onBlur: () => null,
  isOptionSelected: () => null,
  onSelect: () => null,
});
