import { graphqlHTTP } from 'express-graphql';
import { resolvers } from './rootResolver';
import { schema } from './schemas';

export const graphqlEndPoint = graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
});
