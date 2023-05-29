const express = require('express');
const router = express.Router();
const authController = require('../Controllers/auth');
const userController = require('../Controllers/userController');



router.post('/register', userController.createUser);
router.post('/login', authController.login);

module.exports = router;
