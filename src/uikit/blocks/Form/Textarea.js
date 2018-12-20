import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import Input from './Input';

const StyledTextarea = styled(Input)`
  width: ${prop('width', '100%')};
`;

const Textarea = props => <StyledTextarea as="textarea" {...props} />;

export default Textarea;
