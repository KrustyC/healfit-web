import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Star from './Star';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const rates = [1, 2, 3, 4, 5];

const UikStarRating = ({ rating = 0, size, onRate }) => {
  const [colouredUntil, setColouredUntil] = useState(rating);
  const handleClick = r => () => onRate(r);

  const onEnter = r => () => {
    if (onRate !== null) {
      setColouredUntil(r);
    }
  };

  const onLeave = () => {
    if (onRate !== null) {
      setColouredUntil(rating);
    }
  };

  return (
    <Row>
      {rates.map(r => (
        <Star
          key={r}
          size={size}
          isFilled={r <= colouredUntil}
          isClickable={onRate !== null}
          onSelect={handleClick(r)}
          onEnter={onEnter(r)}
          onLeave={onLeave}
        />
      ))}
    </Row>
  );
};

UikStarRating.propTypes = {
  size: PropTypes.oneOf(['small', 'regular', 'large']),
  rating: PropTypes.number,
  onRate: PropTypes.func,
};

UikStarRating.defaultProps = {
  size: 'regular',
  rating: 0,
  onRate: null,
};

export default UikStarRating;
