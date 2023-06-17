const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const followScheme = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  following: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
}, { timestamps: true });

const Follow = mongoose.model('Follow', followScheme);
module.exports = Follow;
