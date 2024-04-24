const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plm=require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/newproject");

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
        
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    posts: [{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Post'
    }],
       
    dp: {
        type: String,
       
    },
    fullname: String
});

userSchema.plugin(plm);


module.exports = mongoose.model('User', userSchema);


