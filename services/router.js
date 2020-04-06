const express = require('express');
const router = new express.Router();
const bodyParser = require('body-parser');


const UserProfile = require('../controller/UserProfile.js');
const getUserById= require('../controller/getUserById.js');

// Route to insert User Data
router.route('/postUser')
.post(UserProfile.post);

// Route to get User Data by ID
router.route('/getUserByID')
.get(getUserById.get);


 module.exports = router;