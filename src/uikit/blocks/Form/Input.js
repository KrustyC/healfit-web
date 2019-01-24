import React from 'react';
import styled, { css } from 'styled-components';
import { Field } from 'formik';

const Input = styled(Field)`
  ${({ theme, noMargin }) => css`
    width: 100%;
    outline: none;
    height: 50px;
    min-height: 50px;
    margin-bottom: ${noMargin ? 0 : '10px'};
    display: flex;
    justify-content: center;

    padding: 0px 5px;
    border: 2px solid ${theme.colors.border};
    border-radius: 2px;

    :focus {
      border: 2px solid ${theme.colors.primary};
    }
  `}
`;

// const CustomInputComponent = ({
//   field, // { name, value, onChange, onBlur }
//   form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
//   ...props
// }) => (
//     <Input {...field} {...props} />
//   </div>
// );

export default Input;
