const express = require('express');
const router = express.Router();
const { auth, isAdmin, isEditor } = require('../middlewares/authMiddleware');
const { getUserProfile } = require('../controllers/userController');

router.route('/profile').get(auth, getUserProfile);
// router.put('/profile');
// router.delete('/profile');

// router.get('/users');
// router.get('/:id');
// router.put('/:id');
// router.delete('/:id');

module.exports = router;
