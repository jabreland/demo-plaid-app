import express from 'express';

const app = express();

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