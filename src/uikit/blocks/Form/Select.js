import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Field } from 'formik';

const StyledSelect = styled(Field)`
  ${({ theme, noMargin }) => css`
    width: 100%;
    outline: none;
    height: 45px;
    min-height: 45px;
    margin-bottom: ${noMargin ? 0 : '10px'};
    display: flex;
    justify-content: center;

    padding: 0px ${theme.padding.sm};
    border: 2px solid ${theme.colors.border};
    border-radius: 2px;
    font-size: ${theme.fontSize.regular};
    color: ${theme.colors.font};
    background: ${theme.colors.white};
    /* background: url(http://i62.tinypic.com/2e3ybe1.jpg) no-repeat right center; */
    /* appearance: none; */

    :focus {
      border: 2px solid ${theme.colors.primary};
    }
  `}
`;

const Option = styled.option``;

const Select = ({ name, children }) => (
  <StyledSelect component="select" name={name}>
    {children}
  </StyledSelect>
);

Select.Option = Option;

Select.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};

export default Select;
