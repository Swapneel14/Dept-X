const mongoose = require("mongoose");



async function connectDB(mongoUrl) {
  if (!mongoUrl.startsWith("mongodb+srv://")) {
    throw new Error("Atlas URI required");
  }
  await mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
}

module.exports = { connectDB};
