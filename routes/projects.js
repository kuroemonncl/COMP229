/*  File: projects.js
    Name: Linh Nguyen
    Student ID: 301265700
    Date: October 09, 2023
*/
var express = require('express');
var router = express.Router();

// GET request for the Projects page
router.get('/', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

module.exports = router;
