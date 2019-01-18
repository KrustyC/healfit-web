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
  type Usert {
    id: ID!
    firstName: String
    lastName: String
  }

  type Mutation {
    setCurrentuser(user: User!): User
    clearuser(user: User!): Boolean
  }

  type Query {
    currentUser: User
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

const link = ApolloLink.from([
  errorLink,
  stateLink,
  authMiddlewareLink,
  httpLink,
]);

export default new ApolloClient({
  link,
  cache,
  connectToDevTools: true, // Check if is not production
});
