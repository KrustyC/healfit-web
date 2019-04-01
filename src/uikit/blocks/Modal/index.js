import _ from 'lodash';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

import ModalContext from './context';
import Backdrop from './Backdrop';
import ModalHeader, { HeaderStyled } from './Header';
import ModalDoubleConfirm from './DoubleConfirm';
import ModalFooter from './Footer';
import ModalConfirm from './ConfirmBtn';
import ModalCancel from './CancelBtn';

const slideInTop = keyframes`
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
`;

const ModalBody = styled.div`
  padding: ${({ theme }) => theme.spaces.regular};
`;

const ModalContainer = styled.div`
  width: 100%;
  max-width: 450px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
  animation: ${slideInTop} 0.2s ease-in-out;
  z-index: 10002; // @TODO refactor when all is styled

  ${({ theme }) => css`
    @media (max-width: ${theme.sizes.md}) {
      max-width: 90vw;
    }
  `}

  ${({ large }) =>
    large &&
    css`
      max-width: 600px;
    `}

  ${({ theme, small }) =>
    small &&
    css`
    max-width: 300px;

    ${HeaderStyled}, ${ModalBody}, ${ModalFooter} {
      padding-left: ${theme.spaces.regular};
      padding-right: ${theme.spaces.regular};
    }
  `};
`;

const Modal = ({ show, children, small, large, onCancel }) => {
  const [checkboxConfirmed, setCheckboxConfirmed] = useState(false);

  const handleCancel = () => {
    setCheckboxConfirmed(false);
    onCancel();
  };

  if (!show) {
    return null;
  }

  const requiresConfirm = !!_.find(
    children,
    c => _.get(c, 'type.displayName') === 'DoubleConfirm'
  );

  const context = {
    small,
    checkboxConfirmed,
    disableConfirm: requiresConfirm && !checkboxConfirmed,
    onCancel: () => handleCancel(),
    onConfirmCheckbox: () => setCheckboxConfirmed(!checkboxConfirmed),
  };

  return (
    <ModalContext.Provider value={context}>
      <Backdrop>
        <ModalContainer small={small} large={large}>
          {children}
        </ModalContainer>
      </Backdrop>
    </ModalContext.Provider>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
  onCancel: PropTypes.func,
  small: PropTypes.bool,
  large: PropTypes.bool,
};

Modal.defaultProps = {
  onCancel: () => {},
  small: false,
  large: false,
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.DoubleConfirm = ModalDoubleConfirm;
Modal.Footer = ModalFooter;
Modal.Confirm = ModalConfirm;
Modal.Cancel = ModalCancel;

export default Modal;
