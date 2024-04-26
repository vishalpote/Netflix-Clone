import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// const password=process.env.PASSWORD;
const database=process.env.DB;
export const connection = async () => {
  try {
    await mongoose.connect(database);
    console.log("MongoDB connection established..!!");
  } catch (error) {
    console.log("Error While Connecting...!!"+error.message);
  }
};

