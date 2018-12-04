import styled, { css } from 'styled-components';
import { prop } from 'styled-tools';
import Container from 'uikit/blocks/Container';

const Layout = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 0 10%;
  height: ${prop('height', '30vh')};

  ${({ coloured }) =>
    coloured &&
    css`
      background: linear-gradient(to right, #77a1d3, #79cbca, #e684ae);
    `}
`;

export default Layout;
