import styled, { css } from 'styled-components';

const StyledFeedback = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font-size: ${theme.fontSize.xsmall};
    ${'' /* position: absolute; */}
    bottom: 0;
    left: 0;
  `}
`;

export default StyledFeedback;
