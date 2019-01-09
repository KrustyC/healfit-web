import { ApolloClient } from 'apollo-client';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { withClientState } from 'apollo-link-state';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import decode from 'jwt-decode';
import { history } from 'app/router';

import { defaults, resolvers } from './auth';

const httpLink = createHttpLink({
  uri: `${process.env.API_URL}/graphql`,
});

const cache = new InMemoryCache();

const stateLink = withClientState({
  cache,
  defaults,
  resolvers,
});

const authMiddlewareLink = setContext(() => {
  const token = localStorage.getItem('keepitfit:token');
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

const errorLink = onError(
  ({ graphQLErrors, networkError, forward, operation }) => {
    if (graphQLErrors && graphQLErrors.filter(e => e).length > 0) {
      graphQLErrors.map(({ message = '', status = 200 }) => {
        if (message === 'UNAUTHORIZED' || status === 401) {
          console.log('UNATHORIZED');
          return history.push('/auth/signin');
        }
        if (status === 403) {
          console.warn('Forbidden');
          return history.push(`/error-page/403`);
        }
        return forward(operation);
      });
    }

    if (networkError && networkError.statusCode === 401) {
      return history.push('/auth/signin');
    }

    if (networkError && networkError.statusCode === 403) {
      // Do something
      return console.warn('FORBIDDEN');
    }

    if (networkError && networkError.statusCode >= 500) {
      // eslint-disable-next-line
      console.warn('SERVER ERROR');
      return history.push(`/error-page/${networkError.statusCode}`);
    }
    return null;
  }
);

const links = [errorLink, stateLink, authMiddlewareLink, httpLink];

const link = ApolloLink.from(links);

export default new ApolloClient({
  link,
  cache,
});
