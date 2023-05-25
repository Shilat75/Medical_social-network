const { Client } = require('pg');
const mongoose = require('mongoose');
const path = require('path');

const authRouter = require('./../Controllers/auth');

const client = new Client()
const { Client } = pkg;
new Client({
  user: 'shilat',
  host: 'dpg-ch0llaj3cv2c5b5o7nug-a',
  database: 'd_nbwf',
  password: '0J3XBf05m6IfzTX8YHH46OFruMkj2mPM',
  port: 5432,
  ssl: true,
});
const port = process.env.PORT || 80;
const app = express();
// connect to MongoDB
const dbURI = 'mongodb://0.0.0.0:27017';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
  const db=mongoose.connection
  db.on('error',(err)=>{
    console.log(err);
  })
db.once('open',()=>{
  console.log('database connection established!');
})
app.use(express.static('pages'));
app.use(express.json());
app.use('/auth', authRouter);

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