const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const { validateEmail, validatePassword } = require('../pages/register.js');
const User = require('../models/user');

const port = process.env.PORT || 3000;
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
  console.log('Database connection established!!');
});

app.use(express.static('pages'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/', routes);

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

app.get('/personalArea', (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/personalArea.html'));
});

app.get('/personalArea.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/personalArea.css'));
});
// Route for registering a new user
app.post('/register', async (req, res) => {
  const { email, username, password } = req.body;

  try {
    if (validatePassword(password) && validateEmail(email)) {
      const newUser = await User.create({
        email,
        username,
        password,
        level: 'starter',
      });
      newUser.save()
      res.redirect('/Login');
      
    } 
  } catch (err) {
    res.status(400).send({ error: err.message });
    res.redirect('/Register?error=' + encodeURIComponent(err.message));
    //res.status(400).json({ success: false, error: err.message });
  }
});
app.post('/Login', (req, res) => {
  const { username, password } = req.body;
  // Check if the username and password exist in the database
  User.findOne({ username, password }, (err, user) => {
    if (err) {
      console.error(err);
      res.status(500).send('An error occurred');
    } else if (user) {
      // Redirect to the home page
      res.redirect('/home');
    } else {
      // Show an error message on the browser
      res.status(401).send({ errorMessage: 'Invalid username or password' });
    }
  });
});

module.exports = app;
