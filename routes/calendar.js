var express = require('express');
var cal = express.Router();
var Log = require('../models/log');

//Routing Functions
//Display landing for workouts (default loads /list as well via angular request)
cal.get('/',
    require('connect-ensure-login').ensureLoggedIn(),
    function (req, res) {
        res.render('pages/calendar', {
            user: req.user
        });
    });


//export the modules
module.exports = cal;