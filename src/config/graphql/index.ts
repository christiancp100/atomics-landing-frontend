import { ApolloClient, InMemoryCache } from '@apollo/client';
import { graphqlUrl } from '../environment';

const client = new ApolloClient({
  uri: graphqlUrl,
  cache: new InMemoryCache(),
});

export default client;
