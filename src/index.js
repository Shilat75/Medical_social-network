const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const authRouter = require('../Routes/userRoute');

const port = process.env.PORT || 80;
const app = express();
// render work
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
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/auth', authRouter);

app.get('/', (req, res) => {
  res.render(path.join(__dirname, '../pages/Homepage.ejs'));
});
app.get('/HomePage.css', (req, res) => {
  res.render(path.join(__dirname, '../pages/HomePage.css'));
});
app.get('/Login', (req, res) => {
  res.render(path.join(__dirname, '../pages/Login.ejs'));
});
app.get('/Login.css', (req, res) => {
  res.render(path.join(__dirname, '../pages/Login.css'));
});
app.get('/register', (req, res) => {
  res.render(path.join(__dirname, '../pages/register.ejs'));
});
app.get('/register.css', (req, res) => {
  res.render(path.join(__dirname, '../pages/register.css'));
});
app.get('/Register', (req, res) => {
  if (req.session.username === undefined) {
    res.sendFile('page/register.html', { root: './' });
  } else {
    res.redirect('/Home');
  }
});
// app.post('/', (req, res));

/* app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/Homepage.ejs'));
});
app.get('/HomePage.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/HomePage.css'));
});
app.get('/Login', (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/Login.ejs'));
});
app.get('/Login.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/Login.css'));
});
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/register.ejs'));
});
app.get('/register.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/register.css'));
}); */
// Add POST route for '/register'
app.post('/register', (req, res) => {
  // Handle registration logic here
  res.send('Registration successful');
});
