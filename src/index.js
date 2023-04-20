import express from 'express';

const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
  console.log('A new request has arrived to index.js');
  res.sendFile('pages/Homepage.html');
});

 
 
app.listen(port, () => {
  console.log(`Server is up and runnig at port: ${port}`);
});
