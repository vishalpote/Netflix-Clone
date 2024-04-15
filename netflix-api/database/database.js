const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();

// const password=process.env.PASSWORD;
module.exports.connection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://vishal:vishalpote@netflix.hj3atfm.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("MongoDB connection established..!!");
  } catch (error) {
    console.log("Error While Connecting...!!");
  }
};

