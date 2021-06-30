const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const auth = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split('Bearer ')[1];
      console.log(token);
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select('-password'); //req.user injected..

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

const isAdmin = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(401);
    throw new error('not auithorized! not admin.');
  }
});

const isEditor = asyncHandler(async (req, res, next) => {
  if (req.user.role === 'editor' || req.user.role === 'editor') {
    next();
  } else {
    res.status(401);
    throw new error('not auithorized! not editor');
  }
});

module.exports = { auth, isAdmin, isEditor };
