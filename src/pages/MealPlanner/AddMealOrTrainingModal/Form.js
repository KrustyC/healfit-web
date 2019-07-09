import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import moment from 'moment';
import TimePicker from 'react-times';
import 'react-times/css/classic/default.css';
import { getImageURL } from 'app/helpers/images';
import withGlobalData from 'hoc/withGlobalData';

import Link from 'uikit/elements/Link';
import Heading from 'uikit/elements/Heading';
import Form from 'uikit/blocks/Form';

const Day = styled.div`
  ${({ theme }) => css`
    display: flex;
    span:first-of-type {
      margin-right: ${theme.margin.sm};
      font-weight: bold;
    }
  `}
`;

const Times = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: ${theme.margin.sm} 0;
  `}
`;

const TimeContainer = styled.div`
  ${({ theme }) => css`
    flex: 1;
    &:first-of-type {
      margin-right: ${theme.margin.sm};
    }

    span {
      display: block;
      margin-bottom: ${theme.margin.xs} !important;
      font-weight: bold;
    }
  `}
`;

const RecipesGrid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: ${theme.margin.sm};
    grid-row-gap: ${theme.margin.sm};
  `}
`;

const Recipe = styled.div`
  display: flex;
`;

const RecipePicture = styled.img`
  height: 70px;
  width: 70px;
`;

const RecipeInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: ${theme.padding.xs};
    padding-top: ${theme.padding.xs};
    padding-bottom: ${theme.padding.xs};
  `}
`;

const RecipeTitle = styled(Link)`
  ${({ theme }) => css`
    font-weight: bold;
    font-size: ${theme.fontSize.small};
  `}
`;

const Calories = styled.div`
  ${({ theme }) => css`
    span:first-of-type {
      font-weight: bold;
    }
    span:nth-of-type(2) {
      font-size: ${theme.fontSize.xs};
    }
  `}
`;

const timeConfig = {
  step: 15,
  unit: 'minute',
};

const MealFormBody = ({
  values,
  setFieldValue,
  lookupRecipes,
  onSelectRecipe,
  onSearchRecipe,
  globalData: { mealTypes },
}) => (
  <>
    <Day>
      <span>Date:</span> {moment(values.day).format('dddd[,] Do MMMM YYYY')}
    </Day>

    <Times>
      <TimeContainer>
        <span>Start Time</span>
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
        <span>End Time</span>
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
    <Form.FormGroup css="width: 100%;">
      <Form.Label>Please select a type</Form.Label>
      <Form.Multichoice css="width: 100%;">
        <Form.Multichoice.Choice
          key="meal"
          id="meal"
          name="type"
          checked={values.type === 'meal'}
          onChange={() => setFieldValue('type', 'meal')}
          label="Meal"
          value="meal"
        />
        <Form.Multichoice.Choice
          key="workout"
          id="workout"
          name="type"
          checked={values.type === 'workout'}
          onChange={() => setFieldValue('type', 'workout')}
          label="Workout"
          value="workout"
        />
      </Form.Multichoice>
    </Form.FormGroup>

    {/* If you selected meal type then you'll have to add recipes to it */}
    {values.type === 'meal' && (
      <>
        <Form.FormGroup css="width: 100%;">
          <Form.Label>Please select a type</Form.Label>
          <Form.Multichoice css="width: 100%;">
            {mealTypes.map(({ id, name }) => (
              <Form.Multichoice.Choice
                key={id}
                id={id}
                name="mealType"
                checked={values.mealType === id}
                onChange={e => setFieldValue('mealType', e.target.value)}
                label={name}
                value={id}
              />
            ))}
          </Form.Multichoice>
        </Form.FormGroup>
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
            <RecipesGrid>
              {values.recipes.map(({ id, slug, picture, title, calories }) => (
                <Recipe key={id}>
                  <RecipePicture
                    src={getImageURL(picture, 'w_100,h_100,g_face,c_thumb')}
                    alt="recipe image"
                  />
                  <RecipeInfo>
                    <RecipeTitle to={`/recipes/${slug}`} target="_blank">
                      {title}
                    </RecipeTitle>
                    <Calories>
                      <span>{calories}</span>
                      <span>kcal</span>
                    </Calories>
                  </RecipeInfo>
                </Recipe>
              ))}
            </RecipesGrid>
          </>
        )}
      </>
    )}
  </>
);

MealFormBody.propTypes = {
  values: PropTypes.shape({
    day: PropTypes.object.isRequired,
    type: PropTypes.oneOf(['meal', 'workout', '']).isRequired,
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
