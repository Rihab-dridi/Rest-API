const mongoose=require('mongoose')
require('dotenv').config({ path: './config/.env' });




const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGOURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('MongoDB connected...');
    } catch (error) {
      console.log(error);
    }
  };
  
  module.exports = connectDB;