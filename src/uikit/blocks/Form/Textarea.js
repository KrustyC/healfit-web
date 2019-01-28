import React from 'react';
import styled, { css } from 'styled-components';
import { prop } from 'styled-tools';
import Input from './Input';

const StyledTextarea = styled(Input)`
  ${({ theme }) => css`
    width: ${prop('width', '100%')};
    padding: ${theme.padding.sm};
  `}
`;

const Textarea = props => <StyledTextarea as="textarea" {...props} />;

export default Textarea;
