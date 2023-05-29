const express = require('express');
const router = express.Router();
const authController = require('../Controllers/auth');
const User = require('../models/user');
const bcrypt = require('bcrypt');



router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

module.exports = router;