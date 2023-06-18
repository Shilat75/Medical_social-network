var express = require('express');
const Post = require('../models/post');
const Like = require('../models/like');
const Save = require('../models/save');
const mongoose = require('mongoose');
var router = express.Router();


router.get('/', async function (req, res, next) {

  //  Verify that user is logged in
  if (!req.session.user) {
    return res.redirect(302, '/login');
  }

  // Load all the posts
  let posts = await loadPosts();

  // Count the number of likes for each post
  await addLikesCounter(posts);
  await addFavoritesCounter(posts);

  res.render('home', {
    layout: true,
    page: 'home',
    req: req,
    posts
  })

});


async function loadPosts() {
  console.log('home-loadPosts');
  // Load all the posts
  let posts = await Post.aggregate([{
    $lookup: {
      from: "comments", // collection name in db
      localField: "_id",
      foreignField: "postId",
      as: "comments"
    }
  },
  {
    $lookup: {
      from: "users", // collection name in db
      localField: "userId",
      foreignField: "_id",
      as: "user"
    }
  },
  { $sort: { "createdAt": -1 } },
  {
    $limit: 5
  }]);
  

  return posts;

}

async function addLikesCounter(posts) {
  console.log('home-addLikesCounter');

  for (let i = 0; i < posts.length; i++) {

    let likes = await Like.aggregate([{
      $match: { postId: new mongoose.Types.ObjectId(posts[i]._id) }
    }
    ]);
    // Save the number of likes
    posts[i].likesCounter = likes.length
    console.log('Likes', posts[i]._id, posts[i].likesCounter)
  }
}

async function addFavoritesCounter(posts) {
  console.log('home-addLikesCounter');

  for (let i = 0; i < posts.length; i++) {

    let likes = await Save.aggregate([{
      $match: { postId: new mongoose.Types.ObjectId(posts[i]._id) }
    }
    ]);
    // Save the number of likes
    posts[i].savesCounter = likes.length
    console.log('Saves', posts[i]._id, posts[i].savesCounter)
  }
}


module.exports = router;
