const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    postText: {
        type: String,
        required: true
    },
    image:{
        type:String,
        

    },
     user:
     {
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
     },
    createdAt: {
        type: Date,
        default: Date.now
    },
    likes: {
        type:Array,
        default:[],
    },
});

module.exports= mongoose.model('Post', postSchema);

