const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postScheme = new Schema({
  image: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: true
  },
  likes: {
    type: mongoose.Schema.Types.Array,
    default: 0,
  },
  data: {
    type: String,
    required: true
  },
  uploadDate: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: -1,
  },

}, { timestamps: true });

const Post = mongoose.model('Post', postScheme);
module.exports = Post;
