import { ApolloClient } from 'apollo-client';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { withClientState } from 'apollo-link-state';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import decode from 'jwt-decode';
import { history } from 'app/router';

// import { defaults, resolvers } from './api';

// import { defaults, resolvers } from './auth';
console.log(process.env.API_URL);
const httpLink = createHttpLink({
  uri: `${process.env.API_URL}/graphql`,
});

const apolloCache = new InMemoryCache({
  dataIdFromObject: e => `${e.__typename}_${e.id}` || null, // eslint-disable-line no-underscore-dangle
});

const stateLink = withClientState({
  cache: apolloCache,
  // defaults,
  // resolvers,
});

const authMiddlewareLink = setContext(() => {
  const token = localStorage.getItem('keepitfit-token');

  const headers = {
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  };

  const currentTime = Date.now().valueOf() / 1000;
  const tokenExpiration = decode(token).exp;
  if (currentTime > tokenExpiration) {
    history.push('/login');
  }
  console.log(headers);
  return headers;
});

const afterwareLink = new ApolloLink((operation, forward) =>
  forward(operation).map(response => {
    const context = operation.getContext();
    const {
      response: { headers },
    } = context;

    if (headers) {
      // @TODO this is probably far different
      const token = headers.get('token');
      // const refreshToken = headers.get(JWT.HEADER.REFRESH_TOKEN.NAME);

      if (token) {
        localStorage.setItem('keepitfit-token', token);
      }
    }

    return response;
  })
);

const errorLink = onError(
  ({ graphQLErrors, networkError, forward, operation }) => {
    if (graphQLErrors && graphQLErrors.filter(e => e).length > 0) {
      graphQLErrors.map(({ message = '', status = 200 }) => {
        if (message === 'UNAUTHORIZED' || status === 401) {
          console.log('UNATHORIZED');
          return history.push('/login');
        }
        if (status === 403) {
          console.warn('Forbidden');
          return history.push(`/error-page/403`);
        }
        forward(operation);
      });
    }

    if (networkError && networkError.statusCode === 401) {
      return history.push('/login');
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

const cache = new InMemoryCache();

const links = [
  errorLink,
  stateLink,
  afterwareLink,
  // authMiddlewareLink,
  httpLink,
];

const link = ApolloLink.from(links);

export default new ApolloClient({
  link,
  cache,
});
