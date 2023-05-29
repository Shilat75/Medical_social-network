const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
// const bcrypt = require('bcrypt');
const User = require('../models/user');
// const myData = require('../pages/tempate');
const Post = require('../models/post');

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

app.use(express.static('pages'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/', routes);

app.get('/', (req, res) => {
  /*
  const p = new post({
    postname: 'Tair Mazuz55',
    likes: 9,
    data: 'more about my new blog',
    uploadDate: 2022-12-01
  });
  p.save() */
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
  Post.find()
    .then((posts) => {
    // Send the posts as a response
      res.json(posts);
    })
    .catch((error) => {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

app.get('/getPosts', async (request, response) => {
  const listOfPost = await posts.find({});
  console.log(listOfPosts);
  try {
    response.send(listOfPost);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get('/personalArea.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/personalArea.css'));
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

  try {
    const newUser = await User.create({
      email,
      username,
      password,
      level: 'starter',
    });

    res.status(201).json({ success: true, data: newUser });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

module.exports = app;
