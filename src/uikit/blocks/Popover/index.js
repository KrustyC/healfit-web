import React, { Fragment, useRef } from 'react';
import PropTypes from 'prop-types';
import Portal from 'uikit/elements/Portal';
import useOutsideClick from 'hooks/useOutsideClick';
import useClientRect from 'hooks/useClientRect';

import { Container, Main } from './style';

const Popover = ({ show, position, onHide, body: Body, children }) => {
  const popoverRef = useRef();
  const [rect, ref] = useClientRect();

  useOutsideClick(popoverRef, () => {
    if (show) {
      onHide();
    }
  });

  return (
    <Fragment>
      {React.cloneElement(children, { ref })}
      {show && (
        <Portal id="healfit-popover">
          <Container dimension={rect} position={position}>
            <Main ref={popoverRef}>
              <Body onHide={onHide} />
            </Main>
          </Container>
        </Portal>
      )}
    </Fragment>
  );
};

Popover.propTypes = {
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  show: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
  body: PropTypes.any.isRequired,
  onHide: PropTypes.func.isRequired,
};

Popover.defaultProps = {
  position: 'top',
};

export default Popover;
