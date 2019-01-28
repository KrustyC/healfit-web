import styled, { css } from 'styled-components';

const FormGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: ${theme.padding.xs} 0;
    width: 100%;
    position: relative;
  `}
`;

export default FormGroup;
