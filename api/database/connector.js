import mongoose from "mongoose";

export const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
  } catch (err) {
    console.log(err);
    throw new Error("Cannot connect to Database");
  }
};
