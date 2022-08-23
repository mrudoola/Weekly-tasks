const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const blogSchema = new Schema({
    _id: {
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    mrp:{
        type:Number,
        required:true
    },
    availableStock:{
        type:Number,
        required:true
    },
    measure:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
},{ timestamps:true});

const Blog = mongoose.model('products',blogSchema) //singular of collection name
module.exports = Blog;
