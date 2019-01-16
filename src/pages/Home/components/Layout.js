import styled, { css } from 'styled-components';
import { prop } from 'styled-tools';
import Container from 'uikit/blocks/Container';

const Layout = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${prop('direction', 'row')};

  background: #fff;
  padding: ${({ theme: { padding } }) => padding.md};
  min-height: ${prop('height', '30vh')};

  ${({ coloured }) =>
    coloured &&
    css`
      background: linear-gradient(
        to right,
        #1e5799 0%,
        #2989d8 0%,
        #42e595 0%,
        #3bb2b8 100%
      );
    `}

  ${({ theme, footer }) =>
    footer &&
    css`
      background: ${theme.colors.darkLter};
    `}
`;

export default Layout;
