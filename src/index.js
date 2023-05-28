const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const authRouter = require('./../Controllers/auth');
<<<<<<< HEAD
const { Client } = pkg;

new Client({
  user: 'shilat',
  host: 'dpg-ch0llaj3cv2c5b5o7nug-a',
  database: 'd_nbwf',
  password: '0J3XBf05m6IfzTX8YHH46OFruMkj2mPM',
  port: 5432,
  ssl: true,
});
=======
const User = require('../models/user');
>>>>>>> cde983c088569ef3f5d0c11d150e64467eef01ac

const port = process.env.PORT || 80;
const app = express();
// render work
// Connect to MongoDB
const dbURI = 'mongodb+srv://tairmazuz19:0532217639@nosecl.evkn28f.mongodb.net/';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  })
  .catch((err) => console.log(err));

const db = mongoose.connection;
db.on('error', (err) => {
  console.log(err);
});
db.once('open', () => {
  console.log('Database connection established!');
});

app.use(express.static('pages'));
app.use(express.json());
app.use('/auth', authRouter);

/*app.get('/auth', (req, res) => {
  res.sendFile(path.join(__dirname, authRouter));
});*/
app.post('/register', (req, res) => {
  // Handle registration logic here
  // You can call your signup function from the authController here
  authController.signup(req, res);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/Homepage.html'));
});
app.get('/HomePage.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/HomePage.css'));
});
app.get('/Login', (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/Login.html'));
});
app.get('/Login.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/Login.css'));
});
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/register.html'));
});
app.get('/register.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/register.css'));
});
// Add POST route for '/register'
app.post('/register', (req, res) => {
  // Handle registration logic here
  res.send('Registration successful');
});