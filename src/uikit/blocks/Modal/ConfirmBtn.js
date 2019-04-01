import React from 'react';
import PropTypes from 'prop-types';

import ModalContext from './context';
import Button from '../Button';

const ModalFooterConfirm = props => (
  <ModalContext.Consumer>
    {({ disableConfirm, small }) => (
      <Button
        {...props}
        disabled={disableConfirm || props.disabled}
        size={small ? 'small' : null}
        color="primary"
      >
        {props.children}
      </Button>
    )}
  </ModalContext.Consumer>
);

ModalFooterConfirm.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.any,
};

ModalFooterConfirm.defaultProps = {
  disabled: false,
  children: 'Confirm',
};

export default ModalFooterConfirm;
