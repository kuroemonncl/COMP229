/*  File: contact.js
    Name: Linh Nguyen
    Student ID: 301265700
    Date: October 09, 2023
*/
var express = require('express');
var router = express.Router();

// GET request for the Contact page
router.get('/', function(req, res, next) {
    res.render('contact', { title: 'Contact Page' });
});

module.exports = router;
