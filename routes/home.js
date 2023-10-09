/*  File: home.js
    Name: Linh Nguyen
    Student ID: 301265700
    Date: October 09, 2023
*/
var express = require('express');
var router = express.Router();

// GET request for the Home page
router.get('/', function(req, res, next) {
    res.render('home', { title: 'Home Page' });
});

module.exports = router;
