import styled, { css } from 'styled-components'
import withPortal from 'helpers/withPortal'

const Loader = styled.div`
  ${({ theme }) => css`
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    background: ${theme.colors.primary};
  `}
`

export default withPortal(Loader, 'loader-root');
