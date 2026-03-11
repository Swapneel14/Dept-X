const mongoose = require("mongoose");
const Student = require("../models/students.js");

async function main() {
  await mongoose.connect("mongodb+srv://swapneel_14:Daredevil1421@cluster0.3udl4ly.mongodb.net/dashboard?retryWrites=true&w=majority");
  const s = await Student.findOne({
    password: { $exists: true, $nin: [null, ""] },
  });
  if (!s) {
    console.log("NO_STUDENT_WITH_PASSWORD");
  } else {
    console.log(String(s._id));
  }
  await mongoose.disconnect();
}

main().catch((e) => {
  console.error("DB_ERR", e);
  process.exit(1);
});

