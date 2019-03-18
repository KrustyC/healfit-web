import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const H1 = styled.h1`
  ${({ theme, align, color }) => css`
    text-align: ${align};
    color: ${theme.colors[color]};
  `}
`;

const H2 = styled(H1)`
  ${({ theme }) => css`
    /* font-size: ${theme.fontSize.h2}; */
  `}
`;

const H3 = styled(H1)`
  ${({ theme }) => css`
    /* font-size: ${theme.fontSize.h3}; */
    /* font-weight: bold; */
  `}
`;

const H4 = styled(H1)`
  ${({ theme }) => css`
    /* font-size: ${theme.fontSize.h4};
    font-weight: bold;
    margin: ${theme.spaces.small} 0; */
  `}
`;

const Title = styled(H1)`
  ${({ theme }) => css`
    /* margin: ${theme.margin.sm};
    font-size: ${theme.fontSize.title}; */
  `}
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
    <Tag level={level} as={level} align={align} {...rest}>
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  children: PropTypes.any.isRequired,
  font: PropTypes.oneOf(['default', 'serif']),
  level: PropTypes.oneOf(['title', 'h1', 'h2', 'h3', 'h4']),
  align: PropTypes.oneOf(['', 'left', 'right', 'center', 'justify']),
  color: PropTypes.oneOf([
    'font',
    'white',
    'primary',
    'accent',
    'success',
    'warning',
    'error',
    'info',
  ]),
};

Heading.defaultProps = {
  font: 'default',
  level: 'h1',
  align: '',
  color: 'font',
};

export default Heading;
