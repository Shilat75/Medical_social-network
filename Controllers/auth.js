const express = require('express');
const mongoose=require('mongoose');
const User=require('../models/user');
const router=express.Router();

// Route for adding a new user
router.post('/register', async (req, res) => {
  const { username, email, password, address, name, phone } = req.body;

  // Check if the email is in a valid format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).send('Invalid Email Format');
  }

  // Check the length and special characters in the password
  if (password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return res.status(400).send('Invalid Password Format');
  }

  // Check if the username already exists in the system
  const existingUsername = await User.findOne({ username });
  if (existingUsername) {
    return res.status(400).send('Username Already Exists');
  }

  // Check if the email already exists in the system
  const existingEmail = await User.findOne({ email });
  if (existingEmail) {
    return res.status(400).send('Email Already Exists');
  }

  // Create a new user
  const newUser = new User({
    username,
    email,
    password,
    address,
    name,
    phone
  });

  try {
    // Save the new user to the database
    const savedUser = await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: savedUser });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).send('An error occurred while saving the user');
  }
  
});

module.exports = router;
