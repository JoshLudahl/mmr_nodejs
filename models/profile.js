var mongoose = require('mongoose');

module.exports = mongoose.model('Profile', {
    username : {
        type: String
    },
    name : {
        type: String
    },
    email : {
        type: String,
    }
}, 'profile');