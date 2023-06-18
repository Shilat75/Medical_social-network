const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const likeScheme = new Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: 'Post'
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    default: -1,
    ref: 'User'
  }
}, { timestamps: true });

const Like = mongoose.model('Like', likeScheme);
module.exports = Like;
