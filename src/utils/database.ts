import mongoose from "mongoose";

import { DATABASE_URL } from "./env";

const connect = async () => {
  try {
    await mongoose.connect(DATABASE_URL, {
      dbName: "db-ticket",
    });
    return Promise.resolve("Connected to MongoDB");
  } catch (error) {
    return Promise.reject("Failed to connect to MongoDB: " + error);
  }
};

export default connect;
