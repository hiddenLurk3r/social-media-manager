//Creating a scheme for posts

const mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
        author: {
            type: String,
            required: true
          },
        publish_date: {
            type: Date,
            default: Date.now
          },
        textContent: {
          type: String,
          required: true
        },
        socialSite: {
          type: String,
          required: true
        },
        isApproved: {
          type: String,
          default: false
        },
        linkToPicture: {
          type: String,
          required: false
        }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;