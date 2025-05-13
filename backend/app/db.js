import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URL);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

export default connectDB;
