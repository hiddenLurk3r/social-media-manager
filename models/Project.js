//Creating a scheme for projects, each projects will have his own array of posts

const mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
    project_name: {
        type: String,
        required: true
      },
      posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }]
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;