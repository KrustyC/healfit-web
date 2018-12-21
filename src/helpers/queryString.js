import qs from 'query-string';

export const locationToString = (location, options = {}) =>
  qs.parse(location.search, options);

export const queryToString = query => qs.stringify(query);
