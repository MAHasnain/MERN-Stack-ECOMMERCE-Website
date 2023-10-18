

import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.mongodbURI);
    console.log(`Connected to MongoDB ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error in MongoDB ${error}`);
  }
};

export default connectDB;
