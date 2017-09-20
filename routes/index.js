var express = require('express');
var router = express.Router();
var USERS = require('../users');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.body);
  res.render('index', { title: 'cat' });
});
router.get('/test', function(req, res, next) {
  res.render('index', { title: 'test' });
});
router.get('/all', function(req, res, next) {
  console.log(USERS);
  res.render('all', { users: USERS });

});
router.get('/signup', function(req, res, next) {
  res.render('signUp', { title: 'test' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'test' });
});

//router.get('/api/users/profile', function(req, res, next) {
  //res.render('index', { title: 'test' });
//});
module.exports = router;
