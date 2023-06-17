const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentScheme = new Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Post'
  },
  comment: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Comment = mongoose.model('Comment', commentScheme);
module.exports = Comment;
