//Creating a scheme for projects, each projects will have his own array of posts

const mongoose = require('mongoose');

var projectsSchema = new mongoose.Schema({
    project_name: {
        type: String,
        required: true
      },
    posts: [{
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
    }]
});

const Projects = mongoose.model('Projects', projectsSchema);

module.exports = Projects;