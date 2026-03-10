const mongoose = require("mongoose");

const DEFAULT_MONGO_URL = "mongodb://127.0.0.1:27017/dashboard";

async function connectDB(mongoUrl = DEFAULT_MONGO_URL) {
  await mongoose.connect(mongoUrl);
}

module.exports = { connectDB, DEFAULT_MONGO_URL };
