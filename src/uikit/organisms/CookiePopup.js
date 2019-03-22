import React, { useContext, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { RootContext } from 'app/contexts/RootContext';
import withPortal from 'hoc/withPortal';

import P from 'uikit/elements/P';
import Button from 'uikit/blocks/Button';

const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: ${theme.dimensions.containerWidth.fullscreen};
    height: auto;
    min-height: 8vh;
    background: ${theme.colors.darkLter};
    color: ${theme.colors.white};
    padding: ${theme.padding.md};

    @media (max-width: ${theme.sizes.md}) {
      flex-direction: column;
    }
  `}
`;

const CookiePopup = () => {
  const { amILoggedIn } = useContext(RootContext);
  const [hidden, setHidden] = useState(amILoggedIn);

  useEffect(() => {
    const token = localStorage.getItem('healfit:accept-cookie');

    if (token) {
      setHidden(true);
    }
  }, []);

  const onDismiss = () => {
    localStorage.setItem('healfit:accept-cookie', true);
    setHidden(true);
  };

  if (hidden) {
    return null;
  }

  return (
    <Container>
      <P align="center" style={{ marginRight: '20px' }}>
        This website uses cookie to ensure you get the best experience on our
        website.
      </P>
      <Button size="small" color="primary" onClick={onDismiss}>
        Got It!
      </Button>
    </Container>
  );
};

export default withPortal(CookiePopup, 'cookie-popup-root');
