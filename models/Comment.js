const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    
    userName:{
        type:String
    },
    img:{
        type:String
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'forumPosts'
    },
    text:{
        type:String,
        required:true
    },

    date: {
        type: Date,
        default: Date.now
      }

});

module.exports = mongoose.model('Comment',CommentSchema);