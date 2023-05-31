const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const User = require('../models/user');
const Post = require('../models/post');

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
    const newUser = await User.create({
      email,
      username,
      password,
      level: 'starter',
    });

    //res.status(201).json({ success: true, data: newUser });
    res.redirect('/Login');
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});
// Set up the route for the login page
app.post('/Login', (req, res) => {
  const { username, password } = req.body;
  // Check if the username and password exist in the database
  User.findOne({ username, password }, (err, user) => {
    if (err) {
      console.error(err);
      res.status(500).send('User Doesnt Exist In The System!');
    } else if (user) {
      // Redirect to the home page
      res.redirect('/home');
    } else {
      // Show an error message
      res.send('Invalid username or password');
    }
  });
});
// new post 
app.post('/home', async (req, res) => {
  const { postname, likes, data , uploadDate , comments } = req.body;
  
  try {
    const newPost = await Post.create({
      postname,
      likes ,
      data,
      uploadDate,
      comments, 
    });

    res.status(201).json({ success: true, data: newPost });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

module.exports = app;
