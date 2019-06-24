import '~/config/ReactotronConfig';
import React from 'react';
import Routes from '~/routes';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from './graphql/apollo.client';

const App = () => (
  <ApolloProvider client={ApolloClient}>
    <Routes />
  </ApolloProvider>
);

export default App;
