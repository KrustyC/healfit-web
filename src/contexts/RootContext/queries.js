import gql from 'graphql-tag';

export const FETCH_INITIAL_DATA = gql`
  fragment ValueObjectData on ValueObject {
    id
    name
    __typename
  }

  query FetchGlobalData {
    globalData {
      ingredientsCategories {
        ...ValueObjectData
      }
      mealTypes {
        ...ValueObjectData
      }
      measurements {
        ...ValueObjectData
      }
      recipeCategories {
        ...ValueObjectData
      }
      recipeLevels {
        ...ValueObjectData
      }
    }
  }
`;

export const SET_GLOBAL_DATA = gql`
  mutation setGlobalData($globalData: Object) {
    setGlobalData(globalData: $globalData) @client
  }
`;

export const FETCH_CURRENT_ACCOUNT_QUERY = gql`
  fragment AccountInfo on Account {
    _id
    firstName
    lastName
    roles
  }

  query FetchCurrentAccountInfo {
    currentAccountInfo {
      ...AccountInfo
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      token
      account {
        _id
        firstName
        lastName
      }
    }
  }
`;
