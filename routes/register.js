var express = require('express');
const User = require('../models/user');
const mongoose = require('mongoose');
var router = express.Router();

/* GET handler */
router.get('/', function (req, res, next) {

  res.render('register', {
    layout: true,
    page: 'register',
    req: req
  });
});

router.post('/', async function (req, res, next) {

  // Register the user in the database
  // We decided if the username exist - update
  try {
    let newUser = await User.findOneAndUpdate({ username: req.body.username },
      Object.assign(req.body, {
        level: 'starter',
      }));

    if (!newUser) {
      newUser = await User.create(
        Object.assign(req.body, {
          level: 'starter',
        }));
    }

    res.redirect('login');
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, error: err.message });
  }
});

module.exports = router;
