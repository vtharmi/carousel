const mongoose = require('mongoose');

const Schema = mongoose.Schema;

 const Carousel = new Schema({
    image: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },
     subTitle: {
         type: String,
         required: true
     }
})

module.exports = Carousel;