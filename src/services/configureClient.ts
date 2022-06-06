import { split, HttpLink, InMemoryCache, ApolloClient } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { GQL_HTTP_URI, GQL_WS_URI } from '../config';

const httpLink = new HttpLink({
  uri: GQL_HTTP_URI,
});

const wsLink = new GraphQLWsLink(createClient({
  url: GQL_WS_URI,
}));

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
 const configLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

export const apolloClient = new ApolloClient({
  link: configLink,
  cache: new InMemoryCache()
});

