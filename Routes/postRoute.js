const express = require('express');
const router = express.Router();

const posts = require('../models/post');
const { log } = require('console');
console.log("Hey to nene")
//router.post('/register', userController.createUser);
//router.post('/login', authController.login);

module.exports = router;

app.get("/users", async (request, response) => {
    const listOfPost = await posts.find({});
  console.log(listOfPosts)
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });