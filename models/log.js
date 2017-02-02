var mongoose = require('mongoose');

module.exports = mongoose.model('Run', {
    author: {
        type: String
    },
    distance : {
        type: Number
    },
    minutes : {
        type: Number,
        default: 0
    },
    hours : {
        type: Number,
        default: 0
    },
    seconds : {
        type: Number,
        default: 0
    },
    miliseconds : {
        type: Number,
        default: 0
    },
    route : {
        type: String,
        default: ""
    },
    date : {
        type: Date,
        default: Date.now
    },
    completed : {
        type: Boolean,
        default: true
    }
}, 'running_log');