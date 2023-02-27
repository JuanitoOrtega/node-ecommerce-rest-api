const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

var blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        description: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        numViews: {
            type: Number,
            default: 0,
        },
        isLiked: {
            type: Boolean,
            default: false,
        },
        isDisliked: {
            type: Boolean,
            default: false,
        },
        likes: [
            {
                type: ObjectId,
                ref: 'User',
            },
        ],
        dislikes: [
            {
                type: ObjectId,
                ref: 'User',
            },
        ],
        author: {
            type: String,
            default: 'Admin',
        },
        images: []
    },
    {
        toJSON: {
            virtuals: true,
        },
        toObject: {
            virtuals: true,
        },
        timestamps: true,
    }
);

module.exports = mongoose.model('Blog', blogSchema);