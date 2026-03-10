const Student = require("../models/students.js");
const err = require("../utils/myerr.js");

module.exports.renderSignup = async (req, res) => {
  const { id } = req.params;
  const user = await Student.findById(id);
  res.render("routes/signup.ejs", { user });
};

module.exports.alreadySignedIn = async (req, res) => {
  const { id } = req.params;
  const student = await Student.findById(id);
  if (!student) {
    throw new err(400, "NO Student Found");
  }
  return res.render("routes/signedin.ejs", { student });
};

module.exports.signup = async (req, res) => {
  const { id } = req.params;
  const { password } = req.body.user;

  const student = await Student.findById(id);
  if (!student) {
    return res.status(404).send("❌ Student not found");
  }

  student.password = password;
  await student.save();
  return res.redirect(`/login/${id}`);
};

module.exports.renderLogin = async (req, res) => {
  const { id } = req.params;
  const student = await Student.findById(id);
  if (!student) {
    throw new err(400, "NO Student Found");
  }
  if (!student.password) return res.render("routes/nosign.ejs");
  return res.render("routes/login.ejs", { student });
};

module.exports.renderProfile = async (req, res) => {
  const { id } = req.params;
  const { password } = req.body.student;
  const student = await Student.findById(id);

  if (!student) {
    throw new err(400, "NO Student Found");
  }

  if (student.password != password) {
    return res.render("routes/wrongp.ejs", { student });
  }

  return res.render("routes/profile.ejs", { student });
};

module.exports.viewProfile = async (req, res) => {
  const { id } = req.params;
  const student = await Student.findById(id);
  if (!student) {
    throw new err(400, "NO Student Found");
  }
  return res.render("routes/view.ejs", { student });
};

module.exports.renderCgpa = async (req, res) => {
  const { id } = req.params;
  const student = await Student.findById(id);
  return res.render("routes/add_gpa.ejs", { student });
};

module.exports.submitCgpa = async (req, res) => {
  const { id } = req.params;
  const student = await Student.findById(id);
  const { cgpa } = req.body.stu;
  student.cgpa = cgpa;
  await student.save();
  return res.redirect(`/login/${id}`);
};

