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
  `}
`;

const ImgContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${theme.margin.sm};

    svg {
      width: 70px;
      border: 3px solid ${theme.colors.border};
      border-radius: 50%;
    }
  `}
`;

const FeaturesGrid = ({ features }) => (
  <Grid>
    {features.map(({ title, content, icon: Icon }) => (
      <Box key={title}>
        <ImgContainer>
          <Icon />
        </ImgContainer>
        <Heading level="h3" align="center">
          {title}
        </Heading>
        <P align="center">{content}</P>
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
