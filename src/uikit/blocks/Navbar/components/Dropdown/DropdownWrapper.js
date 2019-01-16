import styled, { css } from 'styled-components';

const DropdownWrapper = styled.div`
  display: flex;
  justify-content: center;

  ${({ theme }) => css`
    @media (min-width: ${theme.sizes.md}) {
      max-width: 200px;
    }

    @media (max-width: ${theme.sizes.md}) {
      width: 100%;
      flex-direction: column;
    }
  `}
`;

export default DropdownWrapper;
