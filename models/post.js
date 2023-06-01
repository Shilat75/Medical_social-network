const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const postScheme=new Schema(
    {
  
    likes: {
        type: Array,
        default: [],
      },
    data:{ 
        type:String,
        required:true
    },
    uploadDate: {
        type: Date,
        default: Date.now,
      },
    comments: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
      },
      userId:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },

},{timestamps:true});

const Post=mongoose.model('Post',postScheme);
module.exports=Post;
