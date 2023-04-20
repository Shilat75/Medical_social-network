import express from 'express';

const port = process.env.PORT || 3000;
const app = express();

//app.get('/', (req, res) => {
 // console.log('A new request has arrived to index.js');
 // res.send(file://C:/Users/Administrator/Project_manag/pages/Homepage.html');
  //res.sendFile( /Users/Administrator/Project_manag+ "/pages/Homepage.html");
//g});

app.get('/', (req, res) => {
  res.sendFile('pages/Homepage.html');
});

// app.get('/Login', (req, res) => {
//   res.sendFile('pages/login.html', { root: './' });
// });

app.listen(port, () => {
  console.log(`Server is up and runnig at port: ${port}`);
});
