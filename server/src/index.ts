import express from 'express';
import { graphqlEndPoint } from './graphql/graphql';

const app = express();

app.use('/graphql', graphqlEndPoint);

app.get('/api/hello', (req, res) => {
  const data = { hello: 'Hello world!' };
  console.log('Weve been hit Captain!');
  res.send(data);
});

const port = '7777';

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
