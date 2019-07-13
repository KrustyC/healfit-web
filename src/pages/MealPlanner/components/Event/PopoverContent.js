import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Button from 'uikit/blocks/Button';
import Heading from 'uikit/elements/Heading';
import SvgCancel from 'assets/icons/cancel-grey.svg';
import { getName } from './utils';

const Container = styled.div`
  ${({ theme }) => css`
    background: white;
    flex-direction: column;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    min-width: 250px;
    padding: ${theme.padding.sm};
  `}
`;

const Top = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  h3 {
    margin: 0 !important;
  }

  i {
    cursor: pointer;
    svg {
      height: 10px;
      width: 10px;
    }
  }
`;

const Recipes = styled.div`
  ${({ theme }) => css`
    margin: ${theme.margin.xs} 0;
    h4 {
      margin: 0 !important;
    }
  `}
`;
const Recipe = styled.div``;

const XsButton = styled(Button)`
  padding: 0.2rem 0.5rem;
`;

const Bottom = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;

    button:first-of-type {
      margin-right: ${theme.margin.xs};
    }
  `}
`;

const PopoverContent = ({ event, onWantToEdit, onDeleteEvent, onHide }) => (
  <Container>
    <Top>
      <Heading level="h3">
        <b>{getName(event)}</b>
      </Heading>
      <i>
        <SvgCancel onClick={onHide} />
      </i>
    </Top>
    <small>
      {event.__typename === 'MealEvent' && (
        <Recipes>
          <Heading level="h4">Recipes</Heading>
          {event.recipes.map(recipe => (
            <Recipe key={recipe.title}>- {recipe.title}</Recipe>
          ))}
        </Recipes>
      )}
    </small>
    <Bottom>
      <XsButton
        size="small"
        color="primary"
        onClick={() => onWantToEdit(event)}
      >
        Edit
      </XsButton>
      <XsButton size="small" onClick={onDeleteEvent}>
        Delete
      </XsButton>
    </Bottom>
  </Container>
);

PopoverContent.propTypes = {
  event: PropTypes.shape({}).isRequired,
  onHide: PropTypes.func.isRequired,
  onWantToEdit: PropTypes.func.isRequired,
  onDeleteEvent: PropTypes.func.isRequired,
};

export default PopoverContent;
