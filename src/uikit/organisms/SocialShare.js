import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share';

const Social = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;

    > div {
      margin-right: ${theme.margin.sm};
      cursor: pointer;
      :last-child {
        margin-right: 0;
      }
    }
  `}
`;

const SocialShare = ({ url, size }) => {
  const fullUrl = `${process.env.APP_URL}/${url}`;

  return (
    <Social>
      <FacebookShareButton url={fullUrl}>
        <FacebookIcon size={size} round />
      </FacebookShareButton>
      <TwitterShareButton url={fullUrl}>
        <TwitterIcon size={size} round />
      </TwitterShareButton>
      <WhatsappShareButton url={fullUrl}>
        <WhatsappIcon size={size} round />
      </WhatsappShareButton>
      <EmailShareButton url={fullUrl}>
        <EmailIcon size={size} round />
      </EmailShareButton>
    </Social>
  );
};

SocialShare.propTypes = {
  url: PropTypes.string.isRequired,
  size: PropTypes.number,
};

SocialShare.defaultProps = {
  size: 32,
};

export default SocialShare;
