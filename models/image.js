const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// image schema for uploading blog images

var ImageSchema = new Schema({
    imageName: {
        type: String,
        default: "none",
        required: true
    },
    imageData: {
        type: String,
        required: true
    }
});

var Image = mongoose.model('Image', ImageSchema);

module.exports = Image;