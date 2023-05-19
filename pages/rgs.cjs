const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

// Configure body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (e.g., HTML, CSS)
app.use(express.static('pages'));

// Define the route handler for form submission
app.post('/submit-form', (req, res) => {
  // Extract the email address from the form submission
  const email = req.body.email;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Replace with your email service provider
    auth: {
      user: email, // Replace with your email address
      pass: password // Replace with your email password
    }
  });

  // Define the email options
  const mailOptions = {
    from: 'gititda@ac.sce.ac.il', // Replace with your email address
    to: email,
    subject: 'Email Verification',
    text: 'Please verify your email address.'
  };

  // Send the verification email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending verification email:', error);
      // Handle the error here (e.g., show an error message to the user)
      res.status(500).send('Error sending verification email');
    } else {
      console.log('Verification email sent:', info.response);
      // Handle the successful email sending here (e.g., show a success message to the user)
      res.send('Verification email sent');
    }
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
