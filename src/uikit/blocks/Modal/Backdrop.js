import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import ModalContext from './context';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 10001;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.2s ease 1;
`;

const CloseTrigger = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
`;

const ModalBackdrop = ({ children }) => (
  <ModalContext.Consumer>
    {({ onCancel }) => (
      <Backdrop>
        <CloseTrigger onClick={onCancel} />
        {children}
      </Backdrop>
    )}
  </ModalContext.Consumer>
);

ModalBackdrop.propTypes = {
  children: PropTypes.any.isRequired,
};

export default ModalBackdrop;
