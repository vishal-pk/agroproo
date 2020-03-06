const mongoose = require('mongoose');

const ForumPostSchema = mongoose.Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    userName: {
        type: String,
    },
    title: {
        type: String,
        required: true
    },
    subject:{
        type:String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    img:{
        type: String,
        default: null
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('forumPost',ForumPostSchema);