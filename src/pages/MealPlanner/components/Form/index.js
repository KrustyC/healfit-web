import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled, { css } from 'styled-components';
import { compose } from 'react-apollo';
import TimePicker from 'react-times';
import * as Yup from 'yup';
import 'react-times/css/classic/default.css';
import { getImageURL } from 'app/helpers/images';
import withGlobalData from 'hoc/withGlobalData';
import withApolloClient from 'hoc/withApolloClient';

import Heading from 'uikit/elements/Heading';
import Form from 'uikit/blocks/Form';
import RubbishBin from 'assets/icons/rubbish-bin.svg';

import { SEARCH_RECIPES } from './queries';
import {
  Day,
  Times,
  TimeContainer,
  RecipesGrid,
  Recipe,
  RecipeAction,
  RecipePicture,
  RecipeInfo,
  RecipeTitle,
  Calories,
} from './style';

const timeConfig = {
  step: 15,
  unit: 'minute',
};

// @TODO Add a "Can't find the recipe you are looking for? Add it to the system!"
// @TODO Pass ids of recipes to exclude from lookup

const RubbishIcon = styled(RubbishBin)`
  ${({ theme }) => css`
    fill: ${theme.colors.error};
    width: 10px;
    height: 10px;
    outline: none;
    cursor: pointer;

    :hover {
      fill: ${theme.util.darkenOnHover(theme.colors.error)};
    }
  `}
`;

const FormBody = ({
  values,
  client,
  setFieldValue,
  globalData: { mealTypes },
}) => {
  const [lookupRecipes, setLookupRecipes] = useState([]);

  const onSelectRecipe = recipe => {
    setFieldValue('recipes', [...values.recipes, recipe]);
  };

  const onSearchRecipe = async value => {
    if (value.length === 0) {
      return setLookupRecipes([]);
    }

    try {
      const { data } = await client.query({
        query: SEARCH_RECIPES,
        variables: { title: value },
      });

      return setLookupRecipes(data.recipesByTitle);
    } catch (error) {
      return error;
    }
  };

  const onRemoveRecipe = recipeId => {
    const { recipes } = values;
    const index = recipes.findIndex(recipe => recipe._id === recipeId);

    setFieldValue('recipes', [
      ...recipes.slice(0, index),
      ...recipes.slice(index + 1),
    ]);
  };

  return (
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
              list={lookupRecipes.map(recipe => ({
                ...recipe,
                id: recipe._id,
              }))}
              labelField="title"
              emptyMessage="No Recipes Avaialable"
              query={onSearchRecipe}
              onSelect={onSelectRecipe}
            />
            <Form.Feedback name="ingredients" />
          </Form.FormGroup>
          {values.recipes.length > 0 && (
            <>
              <Heading level="h4">Selected Recipes</Heading>
              <RecipesGrid>
                {values.recipes.map(
                  ({ _id, slug, picture, title, calories }) => (
                    <Recipe key={_id}>
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
                      <RecipeAction>
                        <RubbishIcon onClick={() => onRemoveRecipe(_id)} />
                      </RecipeAction>
                    </Recipe>
                  )
                )}
              </RecipesGrid>
            </>
          )}
        </>
      )}
    </>
  );
};

FormBody.propTypes = {
  values: PropTypes.shape({
    day: PropTypes.object.isRequired,
    type: PropTypes.oneOf(['meal', 'workout', '']).isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    recipes: PropTypes.array.isRequired,
  }).isRequired,
  setFieldValue: PropTypes.func.isRequired,
  client: PropTypes.shape({
    query: PropTypes.func.isRequired,
  }).isRequired,
  globalData: PropTypes.shape({
    mealTypes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default compose(
  withGlobalData,
  withApolloClient
)(FormBody);

export const validationSchema = Yup.object().shape({
  type: Yup.string().required('Please select a type'),
  start: Yup.string().required('Please add a start time'),
  end: Yup.string().required('Please add a end time'), // @TODO Validate end time is after start time
  mealType: Yup.string().when('type', {
    is: 'meal',
    then: Yup.string().min(1, 'Please select a meal category'),
    otherwise: Yup.string().min(0),
  }),
  recipes: Yup.array().when('type', {
    is: 'meal',
    then: Yup.array().min(1, 'Please add at least one recipe'),
    otherwise: Yup.array().min(0),
  }),
});
