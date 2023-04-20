const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'MENTAL_MEDICAL',
  password: '99898898',
  port: 5432,
});

pool.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database successfully!');
});

function validate(email, password, callback) {
    // Check if email and password are not empty
    if (email === "" || password === "") {
      callback(new Error("Please enter your email and password"));
      return;
    }

    // query the database to check if the credentials are valid
    pool.query(`
      SELECT * FROM users WHERE username = $1 AND password = $2
    `, [email, password], (error, results) => {
      if (error) {
        callback(error);
        return;
      }
      if (results.rows.length === 1) {
        // if the query returns exactly one row, the credentials are valid
        console.log('Login successful!');
        callback(null, "Login successful!");
      } else {
        // otherwise, the credentials are invalid
        console.log('Invalid email or password.');
        console.log(results.rows.length);

        callback(new Error("Invalid email or password."));
      }
    });
}


