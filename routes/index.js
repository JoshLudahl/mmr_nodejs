var express = require('express');
var router = express.Router();


router.get('/', function(request, response) {
  response.render('pages/index', { user: request.user });
});

router.get('/about', function(request, response) {
  response.render('pages/about', { user: request.user });
});

router.get('/contact', function(request, response) {
  response.render('pages/contact', { user: request.user });
});

module.exports = router;
