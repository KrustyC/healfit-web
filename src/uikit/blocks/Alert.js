import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const AlertDiv = styled.div`
  ${({ theme, align, type }) => css`
    width: 100%;
    padding: ${theme.spaces.small} ${theme.spaces.small};
    border-radius: ${theme.borderRadius};
    background: ${_.get(theme.colors, type)};
    border: 1px solid #ccc;
    border-color: ${theme.util.darkenOnHover(_.get(theme.colors, type))};
    color: ${theme.colors.white};
    box-shadow: ${theme.shadows.default};
    margin-bottom: ${theme.spaces.regular};
    font-weight: bold;
    text-align: ${align};
  `};
`;

const Alert = props => <AlertDiv {...props}>{props.children}</AlertDiv>;

Alert.propTypes = {
  type: PropTypes.oneOf(['error', 'warning', 'success']),
  align: PropTypes.oneOf(['left', 'center']),
  children: PropTypes.any.isRequired,
};

Alert.defaultProps = {
  type: 'success',
  align: 'center',
};

export default Alert;
