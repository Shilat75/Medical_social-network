import express from 'express';

const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
  console.log('A new request has arrived to index.js');
  res.send('Hello main Page 3');
});

app.listen(port, () => {
  console.log(`Server is up and runnigg at port: ${port}`);
});
