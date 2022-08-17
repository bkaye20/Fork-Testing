const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( 
    {
    bookName: {
        type: String,
        required:true,
    },
    price:{
        indian: String,
        europe: String,
    },
    year:{
        type: Number,
        default:2021,
        },
    authorName: String, 
    tags: [String],
    totalPages:Number,
    stockAvailable:Boolean,
},
 { timestamps: true }
 );


module.exports = mongoose.model('BookCollection', bookSchema) //users

