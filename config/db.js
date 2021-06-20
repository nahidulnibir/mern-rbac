const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log('db connected');
  } catch (err) {
    console.error(`error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
