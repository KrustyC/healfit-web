import styled from "styled-components";
import withPortal from "helpers/withPortal";

const Loader = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export default withPortal(Loader, "loader-root");
