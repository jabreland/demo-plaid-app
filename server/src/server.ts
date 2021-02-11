import express, { Express } from 'express';
import { graphqlEndPoint } from './graphql/graphql';
import { PORT } from './config/config';

const app: Express = express();

app.use('/graphql', graphqlEndPoint);

const port = PORT || 7777;

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
