import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const uri = process.env.REACT_REACT_APP_REACT_SERVER;

const httpLink = createHttpLink({
  uri,
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});
