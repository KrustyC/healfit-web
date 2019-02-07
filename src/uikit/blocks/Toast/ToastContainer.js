import React from 'react';
import styled, { css } from 'styled-components';
import withPortal from 'helpers/withPortal';
import { prop, switchProp } from 'styled-tools';
import { PoseGroup } from 'react-pose';

// @TODO Add transisiton group - React Pose shit
const ToastContainer = styled.div`
  box-sizing: border-box;
  max-height: 100vh;
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

// const ToastContainer = ({ children, placement }) => (
//   <div
//     css={{
//       boxSizing: 'border-box',
//       maxHeight: '100%',
//       overflowX: 'hidden',
//       overflowY: 'auto',
//       padding: gutter,
//       pointerEvents: Children.count(children) ? 'auto' : 'none',
//       position: 'fixed',
//       ...placements[placement],
//     }}
//   >
//     {children}
//     {/* <TransitionGroup component={null}>{children}</TransitionGroup> */}
//   </div>
// );

const Con = ({ children, key, placement }) => (
  <ToastContainer placement={placement}>
    <PoseGroup>
      {React.Children.map(
        children,
        React.cloneElement({
          id: key,
        })
      )}
    </PoseGroup>
  </ToastContainer>
);

export default withPortal(Con, 'toast-root');
