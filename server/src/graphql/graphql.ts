import { graphqlHTTP } from 'express-graphql';
import { resolvers } from './resolvers';
import { schema } from './schemas';

export const graphqlEndPoint = graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
});
