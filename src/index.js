const express = require('express');

const mongoose = require('mongoose');
const path = require('path');
// const authRouter = require('../Controllers/auth');

const port = process.env.PORT || 80;
const app = express();
// connect to MongoDB
const dbURI = 'mongodb+srv://tairmazuz19:0532217639@nosecl.evkn28f.mongodb.net/';
// const dbURI = 'mongodb://0.0.0.0:27017';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((_result) => {
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
  console.log('database connection established!');
});
app.use(express.static('pages'));
app.use(express.json());
// app.use('/auth', authRouter);

app.get('/', (_req, _res) => {
  rxes.sendFile(path.join(__dirname, '../pages/Homepage.html'));
});
app.get('/HomePage.css', (_req, res) => {
  res.sendFile(path.join(__dirname, '../pages/HomePage.css'));
});
app.get('/Login', (_req, res) => {
  res.sendFile(path.join(__dirname, '../pages/Login.html'));
});
app.get('/Login.css', (_req, res) => {
  res.sendFile(path.join(__dirname, '../pages/Login.css'));
});
app.get('/register', (_req, res) => {
  res.sendFile(path.join(__dirname, '../pages/register.html'));
});
app.get('/register.css', (_req, res) => {
  res.sendFile(path.join(__dirname, '../pages/register.css'));
});
// Add POST route for '/register'
app.post('/register', (_req, res) => {
  // Handle registration logic here
  res.send('Registration successful');
});
