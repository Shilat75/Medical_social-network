import express from 'express';
import pkg from 'pg';
const {Client} = pkg;

const client = new Client({
 user: 'shilat',
 host: 'dpg-ch0llaj3cv2c5b5o7nug-a',
 database: 'd_nbwf',
 password: '0J3XBf05m6IfzTX8YHH46OFruMkj2mPM',
 port: 5432,
 ssl: true
});
client.connect();
const port = process.env.PORT || 80;
const app = express();
app.use(express.static('pages'));

app.use(express.json());


app.get('/', (req, res) => {
   res.sendFile('pages/Homepage.html', { root: './' });
});
app.get('/HomePage.css', (req, res) => {
  res.sendFile('pages/HomePage.css', { root: './' });
});
app.get('/Login', (req, res) => {
  res.sendFile('pages/Login.html', { root: './' });
});
<<<<<<< HEAD
app.get('/Login.css', (req, res) => {
=======
app.get('/', (req, res) => {
>>>>>>> 798018034cb7ec04b722140c8aedb5e09df7701b
  res.sendFile('pages/Login.css', { root: './' });
});


app.listen(port, () => {
   console.log(`Listening on port ${port}`);
});