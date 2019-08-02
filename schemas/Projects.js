const mongoose = require('mongoose');

var projectsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    project_name: String,
    posts: [{
        author: String,
        publish_date: Date,
        textContent: String,
        socialSite: String,
        isApproved: Boolean,
        linkToPicture: String
    }]
});

const Projects = mongoose.model('Projects', projectsSchema);

module.exports = Projects;