import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Switch, Redirect, Route } from 'react-router-dom';

import EmptyNavbar from 'uikit/organisms/navbars/EmptyNavbar';
import Footer from 'uikit/organisms/Footer';
import Container from 'uikit/blocks/Container';
import PrivacyPolicy from './PrivacyPolicy';
import TermsAndCondition from './TermsAndConditions';
import CookiePolicy from './CookiePolicy';

const Layout = styled(Container)`
  ${({ theme }) => css`
    max-width: ${theme.dimensions.containerWidth.large};
    @media (max-width: ${theme.sizes.md}) {
      max-width: ${theme.dimensions.containerWidth.fullscreen};
    }
  `}
`;

const Legal = ({ match: { path } }) => (
  <Fragment>
    <EmptyNavbar />
    <Layout>
      <Switch>
        <Route path={`${path}/privacy-policy`} component={PrivacyPolicy} />
        <Route
          path={`${path}/terms-and-condition`}
          component={TermsAndCondition}
        />
        <Route path={`${path}/cookie-policy`} component={CookiePolicy} />
        <Redirect to="/404" />
      </Switch>
    </Layout>
    <Footer />
  </Fragment>
);

Legal.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default Legal;
