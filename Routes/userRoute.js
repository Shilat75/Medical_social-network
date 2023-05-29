const express = require('express');
const router = express.Router();
const authController = require('../Controllers/auth');
const User = require('../models/user');

//router.post('/signup', authController.signup);
router.post('/register', async (req, res) => {
    const { email, username, password } = req.body;
    const level = 'starter';
    console.log(email);
    console.log(username);
    console.log(password);
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.render('register', { error: 'The email provided is already registered. Please try with a different email.' });
      }
      
      if (!validateEmail(email)) {
        return res.render('register', { error: 'Invalid email format' });
      }
      if (password.length < 6 && password.length > 20) {
        return res.render('register', { error: 'Password must be between 6 and 20 characters long' });
      }
      
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ email, password: hashedPassword, username, level });
      await user.save();
      res.redirect('/Login');
    } catch (err) {
      console.error(err);
      res.redirect('/register');
    }
  });
  router.get('/register', (req, res) => {
    const message = req.flash('message')[0];
    res.render('register', { error: '' });
  });
router.post('/signin', authController.signin);

module.exports = router;