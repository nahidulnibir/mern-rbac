const express = require('express');
const router = express.Router();
const { authUser, registerUser } = require('../controllers/authController');

router.post('/signup', registerUser);
router.post('/signin', authUser);

module.exports = router;
