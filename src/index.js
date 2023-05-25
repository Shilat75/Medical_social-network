const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const port = process.env.PORT || 80;
const app = express();

// Connect to MongoDB
const dbURI = 'mongodb+srv://tairmazuz19:0532217639@nosecl.evkn28f.mongodb.net/';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
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

app.get('/', (_req, _res) => {
  _res.sendFile(path.join(__dirname, '../pages/Homepage.html'));
});

app.get('/HomePage.css', (_req, _res) => {
  _res.sendFile(path.join(__dirname, '../pages/HomePage.css'));
});

app.get('/Login', (_req, _res) => {
  _res.sendFile(path.join(__dirname, '../pages/Login.html'));
});

app.get('/Login.css', (_req, _res) => {
  _res.sendFile(path.join(__dirname, '../pages/Login.css'));
});

app.get('/register', (_req, _res) => {
  _res.sendFile(path.join(__dirname, '../pages/register.html'));
});

app.get('/register.css', (_req, _res) => {
  _res.sendFile(path.join(__dirname, '../pages/register.css'));
});

app.post('/register', (_req, _res) => {
  // Handle registration logic here
  _res.send('Registration successful');
});
