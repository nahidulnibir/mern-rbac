const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// @desc    get user profile
// @route   GET /api/users/profile
// @access  private
const getUserProfile = asyncHandler(
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      });
    } else {
      res.status(404);
      throw new Error('user not found');
    }
  })
);

module.exports = { getUserProfile };
