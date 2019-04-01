import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import ModalContext from './context';

const Container = styled.div`
  ${({ theme }) => css`
    padding: 0px ${theme.spaces.regular};
    padding-top: ${theme.spaces.regular};
  `};
`;

const ModalDoubleConfirm = props => (
  <ModalContext.Consumer>
    {({ onConfirmCheckbox, checkboxConfirmed }) => (
      <Container>
        <label htmlFor="confirm-modal-action">
          <input
            type="checkbox"
            id="confirm-modal-action"
            style={{ marginRight: '5px' }}
            onChange={onConfirmCheckbox}
            value={checkboxConfirmed}
          />
          {props.label}
        </label>
      </Container>
    )}
  </ModalContext.Consumer>
);

ModalDoubleConfirm.propTypes = {
  label: PropTypes.string,
};

ModalDoubleConfirm.defaultProps = {
  label: 'Please confirm to continue!',
};

ModalDoubleConfirm.displayName = 'DoubleConfirm';

export default ModalDoubleConfirm;
