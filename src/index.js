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
app.use(express.json());


app.get('/', (req, res) => {
   res.sendFile('pages/index.html', { root: './' });
});
app.get('/HomePage.css', (req, res) => {
  res.sendFile('pages/HomePage.css', { root: './' });
});
app.get('/Login', (req, res) => {
  res.sendFile('pages/Login.html', { root: './' });
});
app.get('/getLstyle', (req, res) => {
  res.sendFile('pages/Login.css', { root: './' });
});


// app.get('/Login', (req, res) => {
//    res.sendFile('pages/login.html', { root: './' });
// });

// app.get('/getstyle', (req, res) => {
//    res.sendFile('style/style.css', { root: './' });
// });

// app.get('/Register', (req, res) => {
//    res.sendFile('pages/register.html', { root: './' });
// });

// app.post('/process_post_req', (req, res) => {
//    try {
//       // Get the JSON data from the request
//       const data = req.body;
//       const webData = data;
//       const type = webData.action;

//       // If it's a true statement, then we can send the POST request
//       //Login
//       if (type !== undefined && type === 'process_login' && webData.password !== undefined && webData.username !== undefined) {
//          if ( clean(webData.password) && clean(webData.username))
//          {
//             const obj = `{"response": "${webData.username}"}`;
//             res.send(obj);
//          }
//       } //Register
//       else if (type !== undefined && type === 'process_register' && webData.password !== undefined && webData.username !== undefined && webData.email !== undefined && webData.fullname !== undefined) {
//          var uname = webData.username;
//          var fname = webData.fullname;
//          var pass = webData.password;
//          var mail = webData.email;
//          var tBool = true;

//          if (uname.length < 3 || pass.length < 6 || fname.length < 3 || mail.length < 6)
//          { 
//             tBool = false;
            
//          }
//          if (mail.indexOf('@') < 0 || mail.indexOf('.') < 0)
//          {
//             tBool = false;

//          }
//          if (!clean(pass) && !clean(uname) && !clean(mail) && !clean_fullname(fname))
//          {
//             tBool = false;
//          }
//          if (tBool)
//          {
//             client.connect()
//                .then(() => {
//                   client.query('INSERT INTO users (username, password, fullname, email, permissions) values($1, $2, $3, $4, \'user\')', [uname, pass, fname, mail])
//                })
//                .catch((err) => {
//                   throw err;
//             });
//          }
//       }
//    } catch (err) {
//       console.error(err);
//    }
// });

app.listen(port, () => {
   console.log(`Listening on port ${port}`);
});