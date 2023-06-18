var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
var cookieParser = require('cookie-parser');

const Posts = require('../models/post');
const Likes = require('../models/like');
const Saves = require('../models/save');
const Users = require('../models/user');
const Follow = require("../models/follow");
<<<<<<< HEAD
=======
const Post = require('../models/post');
>>>>>>> a01df2f88b3b05ab71f404575ef310581c3aa26d

router.get("/unfollow/:_id", async function (req, res, next) {
    if (!req.session.user) {
        res.render('login', {
            layout: true,
            page: 'login',
            req
        });
    }


    try {
        let follow = await Follow.findOneAndDelete({ _id: req.params._id })
        res.redirect('/personalArea/view');
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, error: error.message });
    }
<<<<<<< HEAD
}); // unfollow.
=======
}); // un-follow
>>>>>>> a01df2f88b3b05ab71f404575ef310581c3aa26d


router.use('/view', async function (req, res, next) {
    console.log('/personalArea/view', req.session.user);

    if (!req.session.user) {
        res.render('login', {
            layout: true,
            page: 'login'
        });
    }

    try {

        let
            likes = await loadLikes(req.session.user._id),
            saves = await loadSaved(req.session.user._id),
            followers = await loadFollowers(req.session.user._id),
<<<<<<< HEAD
            follows = await loadFollowings(req.session.user._id);

        
=======
            follows = await loadFollowings(req.session.user._id),
            myPosts = await loadPosts(req.session.user._id);

>>>>>>> a01df2f88b3b05ab71f404575ef310581c3aa26d
        res.render('personalArea', {
            layout: true,
            page: 'personalArea',
            req,
<<<<<<< HEAD
            likes,
            saves,
            followers,
            follows
=======
            followers,
            follows,
            likes,
            myPosts,
            saves
>>>>>>> a01df2f88b3b05ab71f404575ef310581c3aa26d
        });
    } catch (err) {
        console.log(err);
        console.log("ERROR FROM router.use")
        res.status(400).json({ success: false, error: err.message });
    }
})

async function loadLikes(userId) {

    // Load all the posts
    let posts = await Likes.aggregate([
        {
            $match: { userId: new mongoose.Types.ObjectId(userId) }
        },
        {
            $lookup: {
                from: "posts", // collection name in db
                localField: "postId",
                foreignField: "_id",
                as: "posts"
            }
        },
        {
            $lookup: {
                from: "users", // collection name in db
                localField: "userId",
                foreignField: "_id",
                as: "users"
            }
        }
    ]);

    return posts;

}

async function loadSaved(userId) {

    // Load all the posts
    let posts = await Saves.aggregate([{
        $match: { userId: new mongoose.Types.ObjectId(userId) }
    },
    {
        $lookup: {
            from: "posts", // collection name in db
            localField: "postId",
            foreignField: "_id",
            as: "posts"
        }
    },
    {
        $lookup: {
            from: "users", // collection name in db
            localField: "userId",
            foreignField: "_id",
            as: "users"
        }
    }
    ]);
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

async function loadFollowings(userId) {
    console.log(`loadFollowings: [${userId}]`);

    // Load all the posts
    let followings = await Follow.find({ "userId": userId })
        .populate("following")
        .populate("userId");

    return followings;

}
<<<<<<< HEAD
=======

async function loadPosts(userId) {
    console.log(`loadPosts: [${userId}]`);

    // Load all the posts
    let myPosts = await Post.aggregate([{
        $match: { userId: new mongoose.Types.ObjectId(userId) }
    },
    {
        $lookup: {
            from: "users", // collection name in db
            localField: "userId",
            foreignField: "_id",
            as: "user"
        }
    },
    { $sort: { _id: -1 } }]);

    return myPosts;

}
>>>>>>> a01df2f88b3b05ab71f404575ef310581c3aa26d
module.exports = router;