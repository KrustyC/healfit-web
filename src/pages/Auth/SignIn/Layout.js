import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

/* eslint-disable global-require */
const LeftSide = styled.div`
  height: 100vh;
  flex: 7;
  background-image: url(${require('assets/images/login.jpg')});
`;
/* eslint-enable global-require */

const RightSide = styled.div`
  height: 100vh;
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Layout = ({ children }) => (
  <Container>
    <LeftSide />
    <RightSide>{children}</RightSide>
  </Container>
);

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;
