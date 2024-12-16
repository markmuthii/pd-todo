import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.DB_STRING)
    .then(() => console.log("Connected!"))
    .catch(() => console.log("Database Connection Failed!"));
};
