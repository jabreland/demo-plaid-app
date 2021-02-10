import { graphqlHTTP } from 'express-graphql';
import { root } from './root';
import { schema } from './schemas';

export const graphqlEndPoint = graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
});
