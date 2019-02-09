import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import withPortal from 'hoc/withPortal';
import withAuth from 'hoc/withAuth';

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

class CookiePopup extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
  };

  state = {
    hidden: this.props.isAuthenticated || false,
  };

  componentDidMount() {
    const token = localStorage.getItem('healfit:accept-cookie');

    if (!token) {
      return null;
    }

    return this.setState({ hidden: true });
  }

  onDismiss = () => {
    localStorage.setItem('healfit:accept-cookie', true);
    this.setState({ hidden: true });
  };

  render() {
    const { hidden } = this.state;

    if (hidden) {
      return null;
    }

    return (
      <Container>
        <P align="center" style={{ marginRight: '20px' }}>
          This website uses cookie to ensure you get the best experience on our
          website.
        </P>
        <Button size="small" color="primary" onClick={this.onDismiss}>
          Got It!
        </Button>
      </Container>
    );
  }
}

export default withAuth(withPortal(CookiePopup, 'cookie-popup-root'));
