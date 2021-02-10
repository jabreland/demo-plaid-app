import express from 'express';
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'

const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

const root = {
  hello() {
    return 'Hello from GraphQl';
  }
}

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}))

app.get("/api/hello", (req, res) =>{
  const data = {hello: 'Hello world!'}
    console.log('Weve been hit Captain!')
    res.send(data);
  } 
);

const port = '7777';

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
});