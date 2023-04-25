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
const port = process.env.PORT || 80;
const app = express();
app.use(express.static('pages'));

app.use(express.json());


app.get('/', (req, res) => {
   res.sendFile('pages/Homepage.html', { root: './' });
});
app.get('/', (req, res) => {
  res.sendFile('pages/HomePage.css', { root: './' });
});
app.get('/Login', (req, res) => {
  res.sendFile('pages/Login.html', { root: './' });
});
app.get('/', (req, res) => {
  res.sendFile('pages/Login.css', { root: './' });
});


app.listen(port, () => {
   console.log(`Listening on port ${port}`);
});