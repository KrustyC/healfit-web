import styled, { css } from "styled-components";
import withPortal from "helpers/withPortal";

const FullPageLoader = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 100vh;
    width: 100vw;
    background: ${theme.colors.primary};
  `}
`;

export default withPortal(FullPageLoader, "full-page-loader-root");
