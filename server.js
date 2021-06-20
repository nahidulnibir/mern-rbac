const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

//routes
const authRoutes = require('./routes/auth');

//db

//app
const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});
//middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

//route middleware

app.use('/api/auth', authRoutes);

//listen
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server running on ${port} in ${process.env.NODE_ENV} mode`);
});
