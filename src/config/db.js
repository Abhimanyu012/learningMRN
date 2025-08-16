import mongoose from "mongoose";

 export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGODB Connected Successfully")
  } catch (error) {
    console.log("MONGODB ERROR in db.js", error);
  }
};
