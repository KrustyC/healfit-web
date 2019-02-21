import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Image as CloudinaryImage, Transformation } from 'cloudinary-react';

import Wizard from 'components/Wizard';
import Editor from 'uikit/organisms/Editor';
import Heading from 'uikit/elements/Heading';
import List from 'uikit/elements/List';

const Image = styled(CloudinaryImage)`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.border};
    height: 300px;
    width: 400px;
  `}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: ${theme.margin.md};
  `}
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Preview = ({ values }) => (
  <Wizard.Page>
    <Container>
      <Heading level="h1">{values.title}</Heading>
      <Image publicId={values.picture}>
        <Transformation dpr="auto" responsive width="auto" crop="scale" />
        {!values.picture && (
          <Transformation
            overlay={{
              fontFamily: 'Cookie',
              fontSize: 40,
              fontWeight: 'bold',
              text: 'Love',
            }}
            effect="colorize"
            color="#f08"
          />
        )}
      </Image>
      <Row>
        <Item>
          <b>Servings</b>
          {values.servings}
        </Item>
        <Item>
          <b>Category</b>
          {values.category.label}
        </Item>
        <Item>
          <b>Total minutes</b>
          {values.totalTime}
        </Item>
        <Item>
          <b>Level</b>
          {values.level}
        </Item>
      </Row>
      <Row>
        <Item>
          <b>Calories</b>
          {values.calories}
        </Item>
        <Item>
          <b>Carbohydrates</b>
          {values.carbohydrates}
        </Item>
        <Item>
          <b>Protein</b>
          {values.protein}
        </Item>
        <Item>
          <b>Fat</b>
          {values.fat}
        </Item>
      </Row>
      <Heading level="h4">Ingridients List</Heading>
      <List type="unordered">
        {values.ingridients.map(({ id, name, measurement, quantity }) => (
          <List.Item key={id}>
            {quantity} {measurement.name} {name}
          </List.Item>
        ))}
      </List>
      <Heading level="h4">Method</Heading>
      <Editor readOnly value={values.method} />
    </Container>
  </Wizard.Page>
);

Preview.propTypes = {
  values: PropTypes.object.isRequired,
};

export default Preview;
