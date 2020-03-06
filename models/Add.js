const mongoose=require("mongoose");

const AddSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    userName:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    img:{
        type:String,
        default: "https://www.liberaldictionary.com/wp-content/uploads/2019/01/a-d-6540.jpg"
    },
    desc:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    number:{
        type:String,
    },
    location:{
        type:String,
    },
    email:{
        type:String,
    }

})

module.exports=mongoose.model('add',AddSchema);