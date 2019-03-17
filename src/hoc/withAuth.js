import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';

const GET_CURRENT_ACCOUNT = gql`
  {
    account @client {
      firstName
      lastName
      roles
    }
    isAuthenticated @client
  }
`;

const SET_CURRENT_ACCOUNT = gql`
  mutation setCurrentAccount($account: Object) {
    setCurrentAccount(account: $account) @client
  }
`;

const CLEAR_ACCOUNT = gql`
  mutation clearAccount {
    clearAccount @client
  }
`;

// const currentAccountQueryHandler = {
//   props: ({ ownProps, data: { account = null, isAuthenticated = false } }) => ({
//     ...ownProps,
//     account,
//     isAuthenticated,
//   }),
// };

const currentAccountQueryHandler = {
  props: prop =>
    // console.log('withAUth', prop.data);
    ({
      account: {},
      isAuthenticated: false,
    }),
  // skip: data => console.log('skip', data),
};

export default Component =>
  compose(
    graphql(GET_CURRENT_ACCOUNT, currentAccountQueryHandler),
    graphql(SET_CURRENT_ACCOUNT, { name: 'setCurrentAccount' }),
    graphql(CLEAR_ACCOUNT, { name: 'clearAccount' })
  )(Component);
