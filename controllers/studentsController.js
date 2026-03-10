const Student = require("../models/students.js");

module.exports.listStudents = async (req, res) => {
  const allstudents = await Student.find({});
  res.render("routes/index.ejs", { allstudents });
};

