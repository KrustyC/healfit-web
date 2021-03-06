import styled, { css } from 'styled-components';
import withPortal from 'hoc/withPortal';
import { prop, switchProp } from 'styled-tools';

const ToastContainer = styled.div`
  box-sizing: border-box;
  max-height: 100vh;
  max-width: 95vw;
  overflow-x: hidden;
  overflow-y: hidden;
  position: fixed;
  ${switchProp(prop('placement', 'bottom-center'), {
    'top-left': css`
      top: 10px;
      left: 10px;
    `,
    'top-center': css`
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    `,
    'top-right': css`
      top: 10px;
      right: 10px;
    `,
    'bottom-left': css`
      bottom: 0;
      left: 0;
    `,
    'bottom-center': css`
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    `,
    'bottom-right': css`
      top: 0;
      right: 0;
    `,
  })}
`;

export default withPortal(ToastContainer, 'toast-root');
