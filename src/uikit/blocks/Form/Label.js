import styled, { css } from 'styled-components';
import { prop, switchProp } from 'styled-tools';

const Label = styled.label`
  ${({ theme }) => css`
    font-size: 15px;
    font-weight: bold;
    margin-bottom: ${theme.margin.xs};
    width: ${prop('width', '100%')};
    position: relative;

    font-size: ${switchProp(prop('size', 'regular'), {
      small: theme.fontSize.small,
      regular: theme.fontSize.regular,
      large: theme.fontSize.large,
    })};

    i {
      position: absolute;
      bottom: 10px;
      right: 10px;
      cursor: pointer;
      svg {
        height: 20px;
        width: 20px;
      }
    }
  `}
`;

export default Label;
