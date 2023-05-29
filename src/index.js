const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const myData = require('../pages/tempate');

const port = process.env.PORT || 3000;
const app = express();

let userInfo;
let dataFound;

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
// Helper function to validate email format
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
app.use(express.static('pages'));
// app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.post('/', (req,res));

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

app.post('/api', (req, res) => {
  async function sendData() {
    userInfo = await myData.create({
      city: req.body.city,
    });
  }
  sendData();
  res.json({
    message: "It's perfect, I received all the data",
  });
});

app.get('/api', (req, res) => {
  try {
    async function search() {
      dataFound = await myData.find();
      res.json({
        dataFound,
      });
    }
    search();
  } catch (e) {
    console.log(e);
  }
});

// Route for registering a new user
app.post('/register', async (req, res) => {
  const { email, username, password } = req.body;
  const level = 'starter';

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.render('register', { error: 'The email provided is already registered. Please try with a different email.' });
    }

    if (!validateEmail(email)) {
      return res.render('register', { error: 'Invalid email format' });
    }
    if (password.length < 8) {
      return res.render('register', { error: 'Password must be at least 8 characters long' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      email, password: hashedPassword, username, level,
    });
    await user.save();

    return res.redirect('/Login');
  } catch (err) {
    console.error(err);
    return res.redirect('/register');
  }
});

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });
