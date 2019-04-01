import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import ModalContext from './context';

export const HeaderStyled = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spaces.regular};
    padding-bottom: 0px;
  `};
`;

const HeaderTitle = styled.div`
  font-weight: 600;
  font-size: 18px;
`;

const CloseIcon = styled.i`
  font-size: 20px;
  line-height: 25px;
  float: right;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray};
`;

const ModalHeader = ({ children }) => (
  <ModalContext.Consumer>
    {({ onCancel }) => (
      <HeaderStyled>
        <CloseIcon className="far fa-times" onClick={onCancel} />
        <HeaderTitle>{children}</HeaderTitle>
      </HeaderStyled>
    )}
  </ModalContext.Consumer>
);

ModalHeader.propTypes = {
  children: PropTypes.any.isRequired,
};

export default ModalHeader;
