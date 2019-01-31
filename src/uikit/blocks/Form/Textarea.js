import styled, { css } from 'styled-components';
import { prop } from 'styled-tools';
import Input from './Input';

const StyledTextarea = styled(Input).attrs({
  type: 'textarea',
})`
  ${({ theme }) => css`
    width: ${prop('width', '100%')};
    padding: ${theme.padding.sm};
    resize: none;
  `}
`;

export default StyledTextarea;
