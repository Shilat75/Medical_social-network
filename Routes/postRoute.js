const express = require('express');
const router = express.Router();
const userController = require('../Controllers/postController');



router.post('/register', postController.createPost);
 

module.exports = router;