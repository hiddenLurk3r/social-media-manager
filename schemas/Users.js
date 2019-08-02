const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: String,
    password: String,
    registered_date: {
        type: Date,
        default: Date.now
    },
    users_projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Projects'
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;