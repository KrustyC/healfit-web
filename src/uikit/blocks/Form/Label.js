import styled, { css } from 'styled-components';
import { prop, switchProp } from 'styled-tools';

const Label = styled.label`
  ${({ theme }) => css`
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 7px;

    font-size: ${switchProp(prop('size', 'regular'), {
      small: theme.fontSize.small,
      regular: theme.fontSize.regular,
      large: theme.fontSize.large,
    })};
  `}
`;

export default Label;
