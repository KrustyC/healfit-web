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
      grid-row-gap: ${theme.margin.md};
    }
  `}
`;

const Box = styled.div`
  ${({ theme }) => css`
    padding: ${theme.padding.md};
  `}
`;

const ImgContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${theme.margin.sm};
  `}
`;

const Image = styled.img`
  ${({ theme }) => css`
    height: 70px;
    width: 70px;
    border-radius: 50%;
    border: 2px solid ${theme.colors.border};
  `}
`;

const FeaturesGrid = ({ features }) => (
  <Grid>
    {features.map(({ title, content, icon }) => (
      <Box key={title}>
        <ImgContainer>
          <Image src={icon} />
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
