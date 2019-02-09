import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const GET_CURRENT_ACCOUNT = gql`
  {
    currentAccount @client {
      account {
        firstName
        lastName
        roles
      }
    }
    authStatus @client {
      isAuthenticated
    }
  }
`;

const currentAccountQueryHandler = {
  props: ({ data: { currentAccount, authStatus } }) => ({
    account: currentAccount.account,
    isAuthenticated: authStatus.isAuthenticated,
  }),
};

export default Component =>
  graphql(GET_CURRENT_ACCOUNT, currentAccountQueryHandler)(Component);
