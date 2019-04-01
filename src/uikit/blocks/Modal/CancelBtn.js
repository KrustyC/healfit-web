import React from 'react';
import PropTypes from 'prop-types';

import ModalContext from './context';
import Button from '../Button';

const ModalFooterCancel = props => (
  <ModalContext.Consumer>
    {({ onCancel, small }) => (
      <Button
        {...props}
        color="link"
        size={small ? 'small' : null}
        onClick={onCancel}
      >
        {props.children}
      </Button>
    )}
  </ModalContext.Consumer>
);

ModalFooterCancel.propTypes = {
  children: PropTypes.any,
};

ModalFooterCancel.defaultProps = {
  children: 'Cancel',
};

export default ModalFooterCancel;
