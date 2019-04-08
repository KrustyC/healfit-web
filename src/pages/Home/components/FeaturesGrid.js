import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Heading from 'uikit/elements/Heading';
import P from 'uikit/elements/P';

const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: ${theme.margin.md};

    @media (max-width: ${theme.sizes.md}) {
      grid-template-columns: 1fr;
    }
  `}
`;

const Box = styled.div`
  ${({ theme }) => css`
    padding: ${theme.padding.md} ${theme.padding.xs};
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    h3 {
      margin-bottom: 0;
    }

    svg {
      width: 55px;
      border-radius: 50%;
    }
  `}
`;

const FeaturesGrid = ({ features }) => (
  <Grid>
    {features.map(({ title, content, icon: Icon }) => (
      <Box key={title}>
        <Icon />
        <Heading level="h3">{title}</Heading>
        <P>{content}</P>
      </Box>
    ))}
  </Grid>
);

FeaturesGrid.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FeaturesGrid;
