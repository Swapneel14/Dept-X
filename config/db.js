const mongoose = require("mongoose");



async function connectDB(mongoUrl) {
  if (!mongoUrl || !mongoUrl.startsWith("mongodb+srv://")) {
    throw new Error("Atlas URI required");
  }
  await mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 15000,
    socketTimeoutMS: 45000,
  });
}

module.exports = { connectDB};
