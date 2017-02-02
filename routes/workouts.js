var express = require('express');
var workouts = express.Router();
var Log = require('../models/log');

//Utility Functions (kept seperate for readability)
function getAllCompletedWorkoutsByUserName(res, user) { //get complete workouts
    Log.find({author:user}, function (err, workout) {
        if (err) res.send(err);
        res.json(workout);
    },{}).where({completed:true});
}
function getAllFutureWorkoutsByUserName(res, user) { //get future workouts
    Log.find({author:user}, function (err, workout) {
        if (err) res.send(err);
        res.json(workout);
    },{}).where({completed:false});
}
function getAllWorkoutsByUserName(res, user) {  //get ALL workouts
    Log.find({author:user}, function (err, workout) {
        if (err) res.send(err);
        res.json(workout);
    },{});
}

//Routing Functions
//Display landing for workouts (default loads /list as well via angular request)
workouts.get('/',
    require('connect-ensure-login').ensureLoggedIn(),
    function (req, res) {
        res.render('pages/workouts', {
            user: req.user
        });
    });

//load add_workout landing
workouts.get('/add',
    require('connect-ensure-login').ensureLoggedIn(),
    function (req, res) {
        res.render('pages/add_workout', {
            user: req.user
        });
    });

workouts.get('/list', require('connect-ensure-login').ensureLoggedIn(),
    function (req, res) {
        getAllCompletedWorkoutsByUserName(res,req.user.username);
    });

//record the new workout
workouts.post('/add', require('connect-ensure-login').ensureLoggedIn(), function (req, res) {

    Log.create({
        author: req.user.username,
        distance: req.body.distance,
        hours: req.body.hours,
        minutes: req.body.minutes,
        seconds: req.body.seconds,
        miliseconds: req.body.miliseconds,
        route: req.body.route,
        date: req.body.date,
        completed: req.body.completed
    }, function (err, todo) {
        if (err) {
            res.send(err);
            console.log("failed, son")
        }

        console.log("successfully saved workout");
        res.render('pages/add_workout', {
            user: req.user
        });
    });
});

//export the modules
module.exports = workouts;