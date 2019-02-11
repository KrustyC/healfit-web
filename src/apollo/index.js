import { ApolloClient } from 'apollo-client';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { withClientState } from 'apollo-link-state';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import decode from 'jwt-decode';
import history from 'app/router/history';

import defaultsAndResolvers from './resolvers';

const httpLink = createHttpLink({
  uri: `${process.env.API_URL}/graphql`,
});

const cache = new InMemoryCache();

const typeDefs = `
  type Account {
    id: ID!
    firstName: String
    lastName: String
  }

  type ValueObject {
    id
    name
  }

  type GlobalData {
    ingridientsCategories: ValueObject
    measurements: ValueObject
  }

  type Mutation {
    setGlobalData(globalData: GlobalData!)
    setCurrentAccount(account: Account!): Account
    clearAccount(account: Account!): Boolean
  }

  type Query {
    currentAccount: Account
    globalData: GlobalData
  }
`;

const stateLink = withClientState({
  cache,
  resolvers: defaultsAndResolvers.resolvers,
  defaults: defaultsAndResolvers.defaults,
  typeDefs,
});

const authMiddlewareLink = setContext(() => {
  const token = localStorage.getItem('healfit:token');
  if (!token) {
    return null;
  }

  const headers = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const currentTime = Date.now().valueOf() / 1000;
  const tokenExpiration = decode(token).exp;
  if (currentTime > tokenExpiration) {
    localStorage.removeItem('healfit:token');
    history.push('/auth/signin');
  }

  return headers;
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const createOmitTypenameLink = new ApolloLink((operation, forward) => {
  if (operation.variables) {
    operation.variables = JSON.parse(
      JSON.stringify(operation.variables),
      (key, value) => (key === '__typename' ? undefined : value)
    );
  }
  return forward ? forward(operation) : null;
});

const link = ApolloLink.from([
  errorLink,
  stateLink,
  createOmitTypenameLink,
  authMiddlewareLink,
  httpLink,
]);

export default new ApolloClient({
  link,
  cache,
  connectToDevTools: true, // Check if is not production
});
