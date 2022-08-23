const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const categorySchema = new Schema({
    _id: {
        type:Number,
        required:true
    },
    categoryName:{
        type:String,
        required:true
    }
},{ timestamps:true});

const categoryBlog = mongoose.model('category',categorySchema) //singular of collection name
module.exports = categoryBlog;
