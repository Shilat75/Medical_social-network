var express = require('express');
const User = require('../models/user');
const Post = require('../models/post');
const Like = require('../models/like');
const mongoose = require('mongoose');
var router = express.Router();

/* GET handler */
router.get('/', function (req, res, next) {

  res.render('login', {
    layout: true,
    page: 'login',
    req: req,
  });
});


router.post('/', async function (req, res, next) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email, password: password });
    if (!user) {
      req.session.loginError = 'Invalid email or password';
      return res.redirect('/login');

    }

    // Save the userId
    req.session.userId = user.id;
    req.session.user = user;

    // Remove error message
    req.session.loginError = undefined;

    // Redirect to the home page
    res.redirect('/home');
  } catch (err) {
    res.status(401).json({ success: false, error: err.message });
  }
});

module.exports = router;
