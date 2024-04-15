const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();

const database=process.env.DATABASE;
module.exports.connection = async () => {
  try {
    await mongoose.connect(database);
    console.log("MongoDB connection established..!!");
  } catch (error) {
    console.log("Error While Connecting...!!");
  }
};

