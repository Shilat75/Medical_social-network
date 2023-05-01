import pkg from 'pg';
const { Pool } = pkg;

import alert from 'alert';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'MENTAL_MEDICAL',
  password: '99898898',
  port: 5432,
});

pool.connect();

function validate(username, password, callback) {
  if(username===""|| password==="")
  {
    alert("99");
  }
  pool.query(`SELECT * FROM users WHERE username = $1 AND password = $2`, [username, password], (err, res) => {
    if (err) {
      console.log(err.message);
      callback(false);
    } else if (res.rows.length > 0) {
      console.log(`${username}`);
      callback(true);
    } else {
      callback(false);
    }
    pool.end();
  });
}

