const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  number:{
    type:String,

  },
  city:{
    type:String
  },
  address:{
    type:String
  },
  pincode:{
    type:String
  },
  profession:{
    type:String
  },
  img:{
    type:String,
    default:null
  }

});

module.exports = mongoose.model('user', UserSchema);
