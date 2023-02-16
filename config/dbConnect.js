const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Database connected successfully');
  } catch (error) {
    console.log('Database connection error: ' + error);
  }
}

module.exports = dbConnect;