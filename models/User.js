//Creating a Scheme for User, see a reference to Projects Scheme

const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      },
    users_projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;