var express = require('express');
const Post = require('../models/post');
const Like = require('../models/like');
const Save = require('../models/save');
const Comment = require('../models/comment');
const Follow = require('../models/follow');
const mongoose = require('mongoose');
const multer = require('multer')
const uploads = multer({ dest: 'uploads/' })
const fs = require('fs-extra');
var router = express.Router();


router.get('/loadUser/:userId',
  async function (req, res, next) {

    console.log('')

    res.render('profile', {
      layout: true,
      page: 'profile',
      req: req,
      posts: await loadPosts(req.params.userId),
      followers: await loadFollowers(req.params.userId),
      isUpdateProfile: false
    })

  });


router.post('/follow/:userId',
  async function (req, res, next) {
    console.log(`follow/`, req.body);

    // Add the follower record
    await Follow.create(req.body);

    res.render('profile', {
      layout: true,
      page: 'profile',
      req: req,
      posts: await loadPosts(req.body.following),
      followers: await loadFollowers(req.body.following)
    })

  });

router.use('/logout', function (req, res, next) {
  console.log('Logout.....')
  // Remove user from the session
  req.session.user = undefined;
  req.session.user = -1;
  res.redirect('/login');

})

async function loadPosts(userId) {
  console.log(`loadPosts: [${userId}]`);

  // Load all the posts
  let posts = await Post.find({ "userId": userId })
    .populate("userId");

  return posts;

}

async function loadFollowers(userId) {
  console.log(`loadFollowers: [${userId}]`);

  // Load all the posts
  let followers = await Follow.find({ "following": userId })
    .populate("following")
    .populate("userId");

  return followers;

}

module.exports = router;
