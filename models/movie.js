var mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title:{
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    photoUrl: {
        type: String,
        trim: true,
        required: true,
    },
    storyOutline:{
        type: String,
        trim: true,
        required: true,
        maxlength: 2000
    },
    duration:{
        type: Number,
        trim: true,
        required: true,
    },
    rating:{
        type: Number,
        trim: true,
        required: true,
        maxlength: 2
    },
    releaseDate:{
        type: Date,
    },
    trailers:[{
        type: String,
        trim: true,
    }]
}, { timestamps: true });

module.exports = mongoose.model("Movie", movieSchema);