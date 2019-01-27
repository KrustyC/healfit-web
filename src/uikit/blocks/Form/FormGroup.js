import styled from 'styled-components';

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 5px;
  margin-bottom: 5px;
  width: ${({ width }) => width || 'auto'};
`;

export default FormGroup;
