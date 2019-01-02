import React from 'react';
import { ApolloConsumer } from 'react-apollo';

function withApolloClient(WrappedComponent) {
  return props => (
    <ApolloConsumer>
      {client => <WrappedComponent client={client} {...props} />}
    </ApolloConsumer>
  );
}

export default withApolloClient;
