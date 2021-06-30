const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

//routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

//db
connectDB();

//app
const app = express();

//middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

//route middleware

app.get('/', (req, res) => {
  res.send('hello world');
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
//listen
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server running on ${port} in ${process.env.NODE_ENV} mode`);
});
