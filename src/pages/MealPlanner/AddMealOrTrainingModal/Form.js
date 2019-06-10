import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import TimePicker from 'react-times';
import 'react-times/css/classic/default.css';

import withGlobalData from 'hoc/withGlobalData';

import Heading from 'uikit/elements/Heading';
import Form from 'uikit/blocks/Form';

const Times = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: ${theme.margin.sm} 0;
  `}
`;

const TimeContainer = styled.div`
  ${({ theme }) => css`
    flex: 1;
    span {
      margin-bottom: ${theme.margin.sm};
      font-weight: bold;
    }
    :first-of-type {
      margin-right: ${theme.margin.sm};
    }
  `}
`;

const timeConfig = {
  step: 15,
  unit: 'minute',
};

const MealFormBody = ({
  values,
  day,
  setFieldValue,
  lookupRecipes,
  onSelectRecipe,
  onSearchRecipe,
  globalData: { mealTypes },
}) => (
  <>
    {day}
    <Form.FormGroup>
      <Form.Label>Please select a type</Form.Label>
      <Form.Multichoice>
        {mealTypes.map(({ id, name }) => (
          <Form.Multichoice.Choice
            key={id}
            id={id}
            name="type"
            checked={values.type === id}
            onChange={e => setFieldValue('type', e.target.value)}
            label={name}
            value={id}
          />
        ))}
      </Form.Multichoice>
    </Form.FormGroup>
    <Times>
      <TimeContainer>
        <span>Start</span>
        <TimePicker
          theme="classic"
          time={values.start}
          timeConfig={timeConfig}
          onTimeChange={({ hour, minute }) =>
            setFieldValue('start', `${hour}:${minute}`)
          }
        />
      </TimeContainer>
      <TimeContainer>
        <span>End</span>
        <TimePicker
          theme="classic"
          time={values.end}
          timeConfig={timeConfig}
          onTimeChange={({ hour, minute }) =>
            setFieldValue('end', `${hour}:${minute}`)
          }
        />
      </TimeContainer>
    </Times>
    {values.type === 'mt-1' && (
      <>
        <Form.FormGroup>
          <Form.Label>Add one or more recipes to your meal</Form.Label>
          <Form.RemoteFilter
            placeholder="Search for recipes..."
            list={lookupRecipes}
            labelField="title"
            emptyMessage="No Recipes Avaialable"
            query={onSearchRecipe}
            onSelect={onSelectRecipe(values, setFieldValue)}
          />
          <Form.Feedback name="ingredients" />
        </Form.FormGroup>
        {values.recipes.length > 0 && (
          <>
            <Heading level="h4">Selected Recipes</Heading>
            <ul>
              {values.recipes.map(({ id, slug, picture, title }) => (
                <li key={id}>{title}</li>
              ))}
            </ul>
          </>
        )}
      </>
    )}
  </>
);

MealFormBody.propTypes = {
  day: PropTypes.string.isRequired,
  values: PropTypes.shape({
    type: PropTypes.oneOf(['mt-1', 'mt-2']).isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    recipes: PropTypes.array.isRequired,
  }).isRequired,
  lookupRecipes: PropTypes.array.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  onSelectRecipe: PropTypes.func.isRequired,
  onSearchRecipe: PropTypes.func.isRequired,
  globalData: PropTypes.shape({
    mealTypes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default withGlobalData(MealFormBody);
