const mongoose = require('mongoose');
const slug = require("mongoose-slug-updater")
const mongooseDelete = require("mongoose-delete")


const Schema = mongoose.Schema;


const Course = new Schema({
    name: { type: String, maxLength: 255, required: true, },
    description: { type: String, maxLength: 600 },
    image: {type: String},
    videoId: {type: String, required:true,},
    level: {type: String},
    slug: {type: String, slug: 'name', unique: true}
}, {
    timestamps: true,
});


mongoose.plugin(slug)
Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true,
});

module.exports = mongoose.model('Course', Course);
