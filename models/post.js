const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const postScheme=new Schema(
    {
    postname:{ 
        type:String,
        required:true
    },
    likes: {
        type: Number,
        default: 0,
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

},{timestamps:true});

const Post=mongoose.model('Post',postScheme);
module.exports=Post;
/*
const user=mongoose.model('user',userScheme);
module.exports=user;*/