import { ApolloClient, InMemoryCache } from '@apollo/client';
import { apiUrl } from '../environment';

const client = new ApolloClient({
  uri: apiUrl,
  cache: new InMemoryCache(),
});

console.log(`apiUrl`, apiUrl);

export default client;
