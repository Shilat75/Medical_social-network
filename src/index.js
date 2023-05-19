const express = require('express');
const { Client } = require('pg');
const mongoose=require('mongoose');
const path = require('path');

const authRouter=require('./../Controllers/auth');
const client = new Client({
 user: 'shilat',
 host: 'dpg-ch0llaj3cv2c5b5o7nug-a',
 database: 'd_nbwf',
 password: '0J3XBf05m6IfzTX8YHH46OFruMkj2mPM',
 port: 5432,
 ssl: true
});
const port = process.env.PORT || 80;
const app = express();
// connect to mongoDB
const dbURI='mongodb+srv://gitit:up99898898@proj-manag.d6bwqs5.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>{
  console.log('Connected To DB ');
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
 });
}).catch((err)=> console.log(err));
app.use(express.static('pages'));

app.use(express.json());

app.use('/auth', authRouter);

app.get('/', (req, res) => {
   res.sendFile('pages/Homepage.html', { root: './' });
});
app.get('/', (req, res) => {
  res.sendFile('pages/HomePage.css', { root: './' });
});
app.get('/Login', (req, res) => {
  res.sendFile('pages/Login.html', { root: './' });
});
app.get('/', (req, res) => {
  res.sendFile('pages/Login.css', { root: './' });
});
app.get('/', (req, res) => {
  res.sendFile('pages/register.css', { root: './' });
});
app.get('/', (req, res) => {
  res.sendFile('pages/register.html', { root: './' });
});


