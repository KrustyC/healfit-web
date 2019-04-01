import React from 'react';

export default React.createContext({
  small: false,
  onCancel: () => {},
  disableConfirm: false,
  checkboxConfirmed: false,
  onConfirmCheckbox: () => {},
});
