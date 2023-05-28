const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const userScheme=new Schema(
    {
    username:{ 
        type:String,
        required:true
    },
    email:{ 
        type:String,
        required:true
    },
    password:{ 
        type:String,
        required:true
    },
    phone:{ 
        type:String,
    },
    address:{ 
        type:String,
    },
    name:{ 
        type:String,
    },

},{timestamps:true});

const User=mongoose.model('User',userScheme);
module.exports=User;
/*
const user=mongoose.model('user',userScheme);
module.exports=user;*/