var express = require('express');
const User = require('../models/user');
const mongoose = require('mongoose');
var router = express.Router();
const {validateEmail,validatePassword}=require('../tests/logintest.test')
/* GET handler */
router.get('/', function (req, res, next) {

  res.render('register', {
    layout: true,
    page: 'register',
    req: req,
    errorMessage: req.session.registerError, // Pass the error message to the template

  });
});

  

router.post('/', async function (req, res, next) {
  

    try {
      
      if (!(validateEmail(req.body.email))){
        req.session.registerError = "invalid Email format!";
        return res.redirect('/register');
      }
      if ((validatePassword(req.body.password))){
        req.session.registerError = "invalid password format!";
        return res.redirect('/register');
      }  
        // Check if email already exists
        const existingEmail = await User.findOne({ email: req.body.email });
        if (existingEmail) {
          req.session.registerError = 'Email already exists';
          return res.redirect('/register');
        }
         // Check if email already exists
         const existingUser = await User.findOne({ username: req.body.username });
         if (existingUser) {
           req.session.registerError = 'Username already exists';
           return res.redirect('/register');
         }
        let newUser = await User.findOneAndUpdate(
        { username: req.body.username },
        Object.assign(req.body, { level: 'starter' }),
        { upsert: true, new: true }
      );
      req.session.registerError = null;          
      res.redirect('/login');
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false, error: err.message });
    }
  }
);

module.exports = router;
