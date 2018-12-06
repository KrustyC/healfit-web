import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const H1 = styled.h1`
  font-weight: 300;
  margin: 0px 0 ${({ theme }) => theme.spaces.regular} 0;

  @media only screen and (min-width: ${({ theme }) => theme.sizes.sm}) {
    font-size: calc(${({ theme }) => theme.fontSize.h1} * 0.75);
  }

  @media only screen and (min-width: ${({ theme }) => theme.sizes.md}) {
    font-size: ${({ theme }) => theme.fontSize.h1};
  }

  ${({ align }) => css`
    text-align: ${align};
  `}
`;

const H2 = styled(H1)`
  font-size: calc(${({ theme }) => theme.fontSize.h2} * 0.75);

  @media only screen and (min-width: ${({ theme }) => theme.sizes.sm}) {
    font-size: calc(${({ theme }) => theme.fontSize.h2} * 0.75);
  }

  @media only screen and (min-width: ${({ theme }) => theme.sizes.md}) {
    font-size: ${({ theme }) => theme.fontSize.h2};
  }
`;

const H3 = styled(H1)`
  font-size: ${({ theme }) => theme.fontSize.h3};
  font-weight: bold;

  @media only screen and (min-width: ${({ theme }) => theme.sizes.sm}) {
    font-size: ${({ theme }) => theme.fontSize.h3};
  }

  @media only screen and (min-width: ${({ theme }) => theme.sizes.md}) {
    font-size: ${({ theme }) => theme.fontSize.h3};
  }
`;

const H4 = styled(H1)`
  font-size: ${({ theme }) => theme.fontSize.h4};
  font-weight: bold;
  margin: 0px 0 calc(${({ theme }) => theme.spaces.small} * 0.5) 0;

  @media only screen and (min-width: ${({ theme }) => theme.sizes.sm}) {
    font-size: ${({ theme }) => theme.fontSize.h4};
  }

  @media only screen and (min-width: ${({ theme }) => theme.sizes.md}) {
    font-size: ${({ theme }) => theme.fontSize.h4};
  }
`;

const Title = styled(H1)`
  margin: 0px;
  font-size: calc(${({ theme }) => theme.fontSize.title} * 0.5);

  @media only screen and (min-width: ${({ theme }) => theme.sizes.sm}) {
    font-size: calc(${({ theme }) => theme.fontSize.title} * 0.75);
  }

  @media only screen and (min-width: ${({ theme }) => theme.sizes.md}) {
    font-size: ${({ theme }) => theme.fontSize.title};
  }
`;

const Heading = ({ children, level, align, ...rest }) => {
  let Tag = H1;

  if (level === 'title') {
    Tag = Title;
  } else if (level === 'h2') {
    Tag = H2;
  } else if (level === 'h3') {
    Tag = H3;
  } else if (level === 'h4') {
    Tag = H4;
  }

  return (
    <Tag level={level} align={align} {...rest}>
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  children: PropTypes.any.isRequired,
  font: PropTypes.oneOf(['default', 'serif']),
  level: PropTypes.oneOf(['title', 'h1', 'h2', 'h3', 'h4']),
  align: PropTypes.oneOf(['', 'left', 'right', 'center', 'justify']),
};

Heading.defaultProps = {
  font: 'default',
  level: 'h1',
  align: '',
};

export default Heading;
